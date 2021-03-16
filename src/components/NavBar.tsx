import React from 'react'
import { Link } from 'react-router-dom'
import { PATHS } from '../routes/routes.constants'

export const NavBar: React.FC = () => {
    return (
        <nav>
            <ul className="flex justify-between w-full">
                <li>
                    <Link to={PATHS.HOME}>Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to={PATHS.DETAIL}>Details</Link>
                </li>
            </ul>
        </nav>
    )
}
