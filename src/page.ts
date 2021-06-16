import { Action, nothing, Widget } from "widgets-for-react";
import { AppState } from "./state";
import { folder_content, folder_overview, form_detail, home, notFound } from "./views";

export const page = (s0: AppState): Widget<Action<AppState>> => {
    if (s0.currentPage.kind == 'home-page') {
        return home(s0)
    }
    if (s0.currentPage.kind == 'form-detail') {
        return form_detail(s0)
    }
    if (s0.currentPage.kind == 'folder-overview') {
        return folder_overview(s0)
    }
    if (s0.currentPage.kind == 'folder-content') {
        return folder_content(s0)
    }
    if (s0.currentPage.kind == 'notfound') {
        return notFound(s0)
    }
    return nothing()
}