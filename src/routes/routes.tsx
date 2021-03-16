import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { PATHS } from './routes.constants'

export const Routes: React.FC = () => {
    return (
        <React.Suspense fallback={<div>LOADING...</div>}>
            <Switch>
                <Route
                    exact
                    path={PATHS.HOME}
                    component={React.lazy(
                        () =>
                            import(
                                /* webpackChunkName: "homePage" */ '../pages/Home/Home'
                            ),
                    )}
                />
                <Route
                    exact
                    path={PATHS.ABOUT}
                    component={React.lazy(
                        () =>
                            import(
                                /* webpackChunkName: "aboutPage" */ '../pages/About/About'
                            ),
                    )}
                />
                <Route
                    exact
                    path={PATHS.DETAIL}
                    component={React.lazy(
                        () =>
                            import(
                                /* webpackChunkName: "detailPage" */ '../pages/Detail/Detail'
                            ),
                    )}
                />
            </Switch>
        </React.Suspense>
    )
}
