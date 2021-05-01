import React from 'react'

import './FAQ.css'

import FAQ from '../pages/FAQ/FAQ'
import { ReactQueryProvider } from '../components/ReactQueryProvider'
import { ToastProvider } from 'react-toast-notifications'
import { BrowserRouter } from 'react-router-dom'

export interface FAQProps {}

export const FAQQ: React.FC<FAQProps> = () => (
    <ToastProvider autoDismiss placement="top-center">
        <ReactQueryProvider>
            <BrowserRouter>
                <FAQ></FAQ>
            </BrowserRouter>
        </ReactQueryProvider>
    </ToastProvider>
)
