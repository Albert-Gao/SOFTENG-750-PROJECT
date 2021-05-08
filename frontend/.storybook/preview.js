import { ReactQueryProvider } from '../src/components/ReactQueryProvider'
import { ToastProvider } from 'react-toast-notifications'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import '../src/index.css'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
    (Story) => (
        <ToastProvider autoDismiss placement="top-center">
            <ReactQueryProvider>
                <BrowserRouter>{Story()}</BrowserRouter>
            </ReactQueryProvider>
        </ToastProvider>
    ),
]
