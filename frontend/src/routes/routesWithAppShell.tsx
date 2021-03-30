import React from 'react'
import { PATHS } from './routes.constants'
import { RouteConfig } from './types'

export const routesWithAppShell: RouteConfig[] = [
    {
        path: PATHS.HOME,
        component: React.lazy(
            () =>
                import(/* webpackChunkName: "homePage" */ '../pages/Home/Home'),
        ),
    },
    {
        path: PATHS.FEATURES,
        component: React.lazy(
            () =>
                import(
                    /* webpackChunkName: "featuresPage" */ '../pages/Features/Features'
                ),
        ),
    },
    {
        path: PATHS.ABOUT,
        component: React.lazy(
            () =>
                import(
                    /* webpackChunkName: "aboutPage" */ '../pages/About/About'
                ),
        ),
    },
    {
        path: PATHS.DETAIL,
        component: React.lazy(
            () =>
                import(
                    /* webpackChunkName: "detailPage" */ '../pages/Detail/Detail'
                ),
        ),
    },

    {
        path: PATHS.PROFILE,
        component: React.lazy(
            () =>
                import(
                    /* webpackChunkName: "profilePage" */ '../pages/Profile/Profile'
                ),
        ),
    },

    {
        path: PATHS.PROFILE_FAV_LIST,
        component: React.lazy(
            () =>
                import(
                    /* webpackChunkName: "profileFavListPage" */ '../pages/ProfileFavList/ProfileFavList'
                ),
        ),
    },

    {
        path: PATHS.PROFILE_NEWS_SUBMISSION_LIST,
        component: React.lazy(
            () =>
                import(
                    /* webpackChunkName: "profileNewsSubmissionListPage" */ '../pages/ProfileNewsSubmissionList/ProfileNewsSubmissionList'
                ),
        ),
    },
]
