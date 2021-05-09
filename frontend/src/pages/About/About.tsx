import React from 'react'
import { Introduction } from './components/Introduction'
import { Teams } from './components/Teams'

const About: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow">
            <Introduction />
            <Teams />
        </div>
    )
}

export default About
