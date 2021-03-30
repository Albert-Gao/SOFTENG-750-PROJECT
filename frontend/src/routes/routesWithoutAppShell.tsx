import React from 'react'
import { PATHS } from './routes.constants'
import { RouteConfig } from './types'

export const routesWithoutAppShell: RouteConfig[] = [
    {
        path: PATHS.LOGIN,
        component: React.lazy(
            () =>
                import(
                    /* webpackChunkName: "loginPage" */ '../pages/Login/Login'
                ),
        ),
    },
    {
        path: PATHS.REGISTER,
        component: React.lazy(
            () =>
                import(
                    /* webpackChunkName: "registerPage" */ '../pages/Register/Register'
                ),
        ),
    },
]
