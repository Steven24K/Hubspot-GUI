import { Entity } from "ts-lenses"
import { AsyncState, Fun, loadingAsyncState, unloadedAsyncState } from "widgets-for-react"
import { get_all_folders, get_all_forms, get_folder_content, get_form_by_id, get_form_submissions } from "./api"
import { HubspotFolderResponse } from "./models/HubspotFolder"
import { HubspotFolderContent } from "./models/HubspotFolderContent"
import { HubspotForm } from "./models/HubspotForm"
import { HubspotSubmission } from "./models/HubspotSubmission"

export type AppState = {
    route: RouteParams
    currentPage: HomePageState | FormDetailPageState | FolderOverPageState | FolderContentPageState | NotFoundPageState | NeverPageState,
    forms: AsyncState<HubspotForm[]>
    current_form: AsyncState<HubspotForm>
    current_submissions: AsyncState<HubspotSubmission>
    folders: AsyncState<HubspotFolderResponse>
    current_folder: AsyncState<HubspotFolderContent>
}

export let initialAppState = (): AppState => ({
    route: { kind: 'home' },
    currentPage: { kind: 'never' },
    forms: unloadedAsyncState(),
    current_form: unloadedAsyncState(),
    current_submissions: unloadedAsyncState(),
    folders: unloadedAsyncState(),
    current_folder: unloadedAsyncState()
})

export interface DefaultComponentProps {
    appState: AppState
    setState: (_: Fun<AppState, AppState>) => void
}

export type RouteParams = { kind: 'home' } |
{ kind: 'form-detail', id: string } |
{ kind: 'folder-overview' } |
{ kind: 'folder-content', id: string } |
{ kind: '404' }

export const isRouteChanged = (oldRoute: RouteParams, newRoute: RouteParams) => oldRoute.kind != newRoute.kind


export type NeverPageState = { kind: 'never' }

export type HomePageState = { kind: 'home-page' }
let HomePageState = (): HomePageState => ({ kind: 'home-page' })

export type FormDetailPageState = { kind: 'form-detail' }
let FormDetailPageState = (): FormDetailPageState => ({ kind: 'form-detail' })

export type FolderOverPageState = { kind: 'folder-overview' }
let FolderOverPageState = (): FolderOverPageState => ({ kind: 'folder-overview' })


export type FolderContentPageState = { kind: 'folder-content' }
let FolderContentPageState = (): FolderContentPageState => ({ kind: 'folder-content' })

export type NotFoundPageState = { kind: 'notfound' }
let NotFoundPageState = (): NotFoundPageState => ({ kind: 'notfound' })

export let setAppStateRoute = (route: RouteParams, appState: AppState): AppState => {
    switch (route.kind) {
        case 'home':
            return Entity(appState)
                .set('route', _ => route)
                .set('currentPage', _ => HomePageState())
                .set('forms', _ => loadingAsyncState(() => get_all_forms()))
                .commit()
        case 'form-detail':
            return Entity(appState)
                .set('route', _ => route)
                .set('currentPage', _ => FormDetailPageState())
                .set('current_form', _ => loadingAsyncState(() => get_form_by_id(route.id)))
                .set('current_submissions', _ => loadingAsyncState(() => get_form_submissions(route.id)))
                .commit()
        case 'folder-overview':
            return Entity(appState)
                .set('route', _ => route)
                .set('currentPage', _ => FolderOverPageState())
                .set('folders', _ => loadingAsyncState(() => get_all_folders()))
                .commit()
        case 'folder-content':
            return Entity(appState)
                .set('route', _ => route)
                .set('currentPage', _ => FolderContentPageState())
                .set('current_folder', _ => loadingAsyncState(() => get_folder_content(route.id)))
                .commit()
        default:
            return Entity(appState)
                .set('route', _ => route)
                .set('currentPage', _ => NotFoundPageState())
                .commit()
    }
}



