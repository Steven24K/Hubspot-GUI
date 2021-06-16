import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { AppState, DefaultComponentProps } from '../../state'


interface NavBarProps extends DefaultComponentProps {
}

export const NavBar = (props: NavBarProps) => {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Hubspot GUI</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Forms</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/folders">Folders</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}