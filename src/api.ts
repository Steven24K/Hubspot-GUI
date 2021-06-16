import { HttpResult } from "widgets-for-react";
import { Chance } from 'chance'
import { Map } from "immutable";
import { HubspotForm } from "./models/HubspotForm";
import { HubspotSubmission } from "./models/HubspotSubmission";
import { HubspotFolderResponse } from "./models/HubspotFolder";
import { HubspotFolderContent } from "./models/HubspotFolderContent";

export const get_all_forms = (): Promise<HttpResult<HubspotForm[]>> => {
    return fetch(`/api/hubspot/getForms`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            return Promise.reject("Error loading forms")
        })
        .then(data => <HttpResult<HubspotForm[]>>({ kind: 'result', status: 200, value: data }))
        .catch(reason => {
            console.log(reason)
            return <HttpResult<HubspotForm[]>>({ kind: 'failed', status: 403 })
        })
}

export const get_form_by_id = (id: string): Promise<HttpResult<HubspotForm>> => {
    return fetch(`/api/hubspot/getFormById/${id}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            return Promise.reject("Error loading forms")
        })
        .then(data => <HttpResult<HubspotForm>>({ kind: 'result', status: 200, value: data }))
        .catch(reason => {
            console.log(reason)
            return <HttpResult<HubspotForm>>({ kind: 'failed', status: 403 })
        })
}

export const get_form_submissions = (id: string): Promise<HttpResult<HubspotSubmission>> => {
    return fetch(`/api/hubspot/getFormSubmissions/${id}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            return Promise.reject("Error loading forms")
        })
        .then(data => <HttpResult<HubspotSubmission>>({ kind: 'result', status: 200, value: data }))
        .catch(reason => {
            console.log(reason)
            return <HttpResult<HubspotSubmission>>({ kind: 'failed', status: 403 })
        })
}

export const get_all_folders = (): Promise<HttpResult<HubspotFolderResponse>> => {
    return fetch(`/api/hubspot/getFolders`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            return Promise.reject("Error loading forms")
        })
        .then(data => <HttpResult<HubspotFolderResponse>>({ kind: 'result', status: 200, value: data }))
        .catch(reason => {
            console.log(reason)
            return <HttpResult<HubspotFolderResponse>>({ kind: 'failed', status: 403 })
        })
}

export const get_folder_content = (id: string): Promise<HttpResult<HubspotFolderContent>> => {
    return fetch(`/api/hubspot/getFolderContent/${id}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            return Promise.reject("Error loading forms")
        })
        .then(data => <HttpResult<HubspotFolderContent>>({ kind: 'result', status: 200, value: data }))
        .catch(reason => {
            console.log(reason)
            return <HttpResult<HubspotFolderContent>>({ kind: 'failed', status: 403 })
        })
}