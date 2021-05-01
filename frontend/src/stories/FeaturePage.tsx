import React from 'react'

import './Feature.css'

import Feature from '../pages/Features/Features'
import { ReactQueryProvider } from '../components/ReactQueryProvider'
import { ToastProvider } from 'react-toast-notifications'
import { BrowserRouter } from 'react-router-dom'

export interface FeatureProps {}

export const Features: React.FC<FeatureProps> = () => (
    <ToastProvider autoDismiss placement="top-center">
        <ReactQueryProvider>
            <BrowserRouter>
                <Feature></Feature>
            </BrowserRouter>
        </ReactQueryProvider>
    </ToastProvider>
)
