import React from 'react'
import { routesWithAppShell } from '../routes/routesWithAppShell'
import { routesWithoutAppShell } from '../routes/routesWithoutAppShell'
import { AppShell } from './AppShell/AppShell'
import { Route, Switch } from 'react-router-dom'

const withoutAppShell = routesWithoutAppShell.map((route) => (
    <Route exact path={route.path} component={route.component} />
))

const withAppShell = routesWithAppShell.map((route) => (
    <Route exact path={route.path} component={route.component} />
))

export const AuthChecker: React.FC = () => {
    return (
        <React.Suspense fallback={<div>LOADING...</div>}>
            <Switch>
                {withoutAppShell}
                <AppShell>
                    <React.Suspense fallback={<div>LOADING...</div>}>
                        <Switch>{withAppShell}</Switch>
                    </React.Suspense>
                </AppShell>
            </Switch>
        </React.Suspense>
    )
}
