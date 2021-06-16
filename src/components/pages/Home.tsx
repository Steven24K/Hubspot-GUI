import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { DefaultComponentProps } from '../../state'

interface HomePageProps extends DefaultComponentProps {

}

export const HomePage = (props: HomePageProps) => {
    if (props.appState.currentPage.kind != 'home-page') return <span></span>

    return <div className='App container'>
        <table className="table">
            <thead>
                <tr>
                    <th>Form ID</th>
                    <th>portal ID</th>
                    <th>Name</th>
                    <th>Redirect</th>
                    <th>Submit Text</th>
                    <th>inline message</th>
                    <th>Fields</th>
                </tr>
            </thead>
            <tbody>
                {props.appState.forms.kind == 'loaded' && props.appState.forms.value.map(form => <tr key={form.guid}>
                    <td><NavLink to={`/form/${form.guid}`}>{form.guid}</NavLink></td>
                    <td>{form.portalId}</td>
                    <td>{form.name}</td>
                    <td>{form.redirect}</td>
                    <td>{form.submitText}</td>
                    <td>{form.inlineMessage.slice(0, 50)}{form.inlineMessage.length > 50 ? "..." : ""}</td>
                    <td>{form.formFieldGroups.length}</td>
                </tr>)}
            </tbody>
        </table>
    </div>

}