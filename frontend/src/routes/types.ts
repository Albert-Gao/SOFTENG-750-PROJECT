import React from 'react'
import { PATHS } from './routes.constants'

export interface RouteConfig {
    path: PATHS
    component: React.ComponentType
}
