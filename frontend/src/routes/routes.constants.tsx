export enum PATHS {
    ABOUT = '/about',
    DETAIL = '/detail/:id',
    FEATURES = '/features',
    HOME = '/',
    PROFILE = '/profile',
    PROFILE_FAV_LIST = '/profile/fav-list',
    PROFILE_NEWS_SUBMISSION_LIST = '/profile/news-submission',

    LOGIN = '/login',
    REGISTER = '/register',
}

export const PAGE_TITLE_MAP = [
    // for nav bar
    { path: PATHS.HOME, TITLE: 'Home' },
    { path: PATHS.FEATURES, TITLE: 'Features', isBeforeAuth: true },
    { path: PATHS.ABOUT, TITLE: 'About', isBeforeAuth: true },
    { path: PATHS.DETAIL, TITLE: 'Detail' },

    // for profile
    { path: PATHS.PROFILE, TITLE: 'Profile', isProfileMenu: true },
    { path: PATHS.PROFILE_FAV_LIST, TITLE: 'Favourites', isProfileMenu: true },
    {
        path: PATHS.PROFILE_NEWS_SUBMISSION_LIST,
        TITLE: 'Submitted News',
        isProfileMenu: true,
    },
]
