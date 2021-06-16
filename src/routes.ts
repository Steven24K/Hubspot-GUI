import { Action, notFoundRouteCase, route, routerSwitch, Widget } from "widgets-for-react";
import { AppState, isRouteChanged, RouteParams, setAppStateRoute } from "./state";

export const routes = (s0: AppState): Widget<Action<AppState>> => routerSwitch<RouteParams>({ key: 'my-router' })([
    route<{}, RouteParams>('/', () => ({ kind: 'home' })),
    route<{ id: string }, RouteParams>('/form/:id', (p) => ({ kind: 'form-detail', id: p.id })),
    route<{}, RouteParams>('/folders', () => ({ kind: 'folder-overview' })),
    route<{ id: string }, RouteParams>('/folder/:id', (p) => ({ kind: 'folder-content', id: p.id })),

    notFoundRouteCase<RouteParams>(() => ({ kind: '404' }))
])
    //.filter(newRoute => isRouteChanged(s0.route, newRoute))
    .map(route => s => setAppStateRoute(route, s))