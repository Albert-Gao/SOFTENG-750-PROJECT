import React from 'react'

import './About.css'

import About from '../pages/About/About'
import { ReactQueryProvider } from '../components/ReactQueryProvider'
import { ToastProvider } from 'react-toast-notifications'
import { BrowserRouter } from 'react-router-dom'

export interface AboutProps {}

export const Aboutt: React.FC<AboutProps> = () => (
    <ToastProvider autoDismiss placement="top-center">
        <ReactQueryProvider>
            <BrowserRouter>
                <About></About>
            </BrowserRouter>
        </ReactQueryProvider>
    </ToastProvider>
)
