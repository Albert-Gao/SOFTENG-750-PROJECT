import React from 'react'

import './login.css'

import Login from '../pages/Login/Login'
import { ReactQueryProvider } from '../components/ReactQueryProvider'
import { ToastProvider } from 'react-toast-notifications'
import { BrowserRouter } from 'react-router-dom'

export interface LoginProps {}

export const LoginPage: React.FC<LoginProps> = () => (
    <ToastProvider autoDismiss placement="top-center">
        <ReactQueryProvider>
            <BrowserRouter>
                <Login></Login>
            </BrowserRouter>
        </ReactQueryProvider>
    </ToastProvider>
)
