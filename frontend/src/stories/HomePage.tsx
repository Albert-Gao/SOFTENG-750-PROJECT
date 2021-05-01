import React from 'react'

import './Home.css'

import Home from '../pages/Home/Home'
import { ReactQueryProvider } from '../components/ReactQueryProvider'
import { ToastProvider } from 'react-toast-notifications'
import { BrowserRouter } from 'react-router-dom'

export interface HomeProps {}

export const Homee: React.FC<HomeProps> = () => (
    <ToastProvider autoDismiss placement="top-center">
        <ReactQueryProvider>
            <BrowserRouter>
                <Home></Home>
            </BrowserRouter>
        </ReactQueryProvider>
    </ToastProvider>
)
