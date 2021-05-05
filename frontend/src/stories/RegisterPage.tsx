import React from 'react'

import './register.css'

import Register from '../pages/Register/Register'
import { ReactQueryProvider } from '../components/ReactQueryProvider'
import { ToastProvider } from 'react-toast-notifications'
import { BrowserRouter } from 'react-router-dom'

export interface RegisterProps {}

export const Register2: React.FC<RegisterProps> = () => (
    <ToastProvider autoDismiss placement="top-center">
        <ReactQueryProvider>
            <BrowserRouter>
                <Register></Register>
            </BrowserRouter>
        </ReactQueryProvider>
    </ToastProvider>
)
