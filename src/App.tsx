import '../static/css/site.css'
import { Action, any, browserRouter, stateful } from 'widgets-for-react';
import { AppState, initialAppState } from './state';
import { footer, navbar } from './views';
import { page } from './page';
import { routes } from './routes';


export const App = stateful<AppState>()(s0 => browserRouter<Action<AppState>>()(
    any<Action<AppState>>()([

        routes(s0),

        navbar(s0),

        page(s0),

        // footer() // The footer does not stick at the bottom when page is too big
    ])
).map(a => a(s0)))(initialAppState())