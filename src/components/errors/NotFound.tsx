import * as React from 'react'
import { DefaultComponentProps } from '../../state'

interface NotFoundPageProps extends DefaultComponentProps { }

export const NotFoundPage = (props: NotFoundPageProps) => <div className="container">
    <h1>Page not found | 404</h1>

    <h2>We are very sorry we could not find the page you were looking for :(</h2>

    <p>
        The not found page is the place for any webdevelopers creativity!
    </p>
</div>