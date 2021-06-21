import { Action, any, async, fromJSX, Widget } from "widgets-for-react";
import { NotFoundPage } from "./components/errors/NotFound";
import { FolderContentPage } from "./components/pages/FolderContent";
import { FolderOverviewPage } from "./components/pages/FolderOverview";
import { FormDetailPage } from "./components/pages/FormDetail";
import { HomePage } from "./components/pages/Home";
import { Footer } from "./components/shared/Footer";
import { NavBar } from "./components/shared/NavBar";
import { HubspotFolderResponse } from "./models/HubspotFolder";
import { HubspotFolderContent } from "./models/HubspotFolderContent";
import { HubspotForm } from "./models/HubspotForm";
import { HubspotSubmission } from "./models/HubspotSubmission";
import { AppState } from "./state";

export const navbar = (s0: AppState): Widget<Action<AppState>> =>
    fromJSX(setState => NavBar({
        appState: s0,
        setState: setState
    }))

export const footer = (): Widget<Action<AppState>> =>
    fromJSX(_ => Footer())

export const home = (s0: AppState): Widget<Action<AppState>> =>
    any<Action<AppState>>()([
        async<HubspotForm[]>()(s0.forms).map(a => s => ({ ...s, forms: a(s.forms) })),

        fromJSX(setState => HomePage({
            appState: s0,
            setState: setState
        }))
    ])

export const form_detail = (s0: AppState): Widget<Action<AppState>> =>
    any<Action<AppState>>()([
        async<HubspotForm>()(s0.current_form).map(a => s => ({ ...s, current_form: a(s.current_form) })),
        async<HubspotSubmission>()(s0.current_submissions).map(a => s => ({ ...s, current_submissions: a(s.current_submissions) })),

        fromJSX(setState => FormDetailPage({
            appState: s0,
            setState: setState
        }))
    ])

export const folder_overview = (s0: AppState): Widget<Action<AppState>> =>
    any<Action<AppState>>()([
        async<HubspotFolderResponse>()(s0.folders).map(a => s => ({ ...s, folders: a(s.folders) })),

        fromJSX(setState => FolderOverviewPage({
            appState: s0,
            setState: setState
        }))
    ])

export const folder_content = (s0: AppState): Widget<Action<AppState>> =>
    any<Action<AppState>>()([
        async<HubspotFolderContent>()(s0.current_folder).map(a => s => ({ ...s, current_folder: a(s.current_folder) })),

        fromJSX(setState => FolderContentPage({
            appState: s0,
            setState: setState
        }))
    ])




export const notFound = (s0: AppState): Widget<Action<AppState>> =>
    fromJSX(setState => NotFoundPage({
        appState: s0,
        setState: setState
    }))