export enum PATHS {
    ABOUT = '/about',
    DETAIL = '/detail/:id',
    DETAIL_RAW = '/detail/',

    USER = '/user/:id',
    USER_RAW = '/user/',

    FEATURES = '/features',
    FAQ = '/faq',
    HOME = '/',
    PROFILE = '/profile',
    PROFILE_FAV_LIST = '/profile/fav-list',
    PROFILE_NEWS_SUBMISSION_LIST = '/profile/news-submission',
    PROFILE_PRIVACY = '/profile/privacy',
    PROFILE_COMMENTS = '/profile/comments',

    LOGIN = '/login',
    REGISTER = '/register',
}

export const PAGE_TITLE_MAP = [
    // for nav bar
    { path: PATHS.HOME, TITLE: 'Home' },
    { path: PATHS.FEATURES, TITLE: 'Features', isBeforeAuth: true },
    { path: PATHS.ABOUT, TITLE: 'About', isBeforeAuth: true },
    { path: PATHS.FAQ, TITLE: 'FAQ', isBeforeAuth: true },

    // for profile
    { path: PATHS.PROFILE, TITLE: 'Profile', isProfileMenu: true },
    {
        path: PATHS.PROFILE_PRIVACY,
        TITLE: 'Privacy',
        isProfileMenu: true,
    },
    { path: PATHS.PROFILE_FAV_LIST, TITLE: 'Favourites', isProfileMenu: true },
    {
        path: PATHS.PROFILE_NEWS_SUBMISSION_LIST,
        TITLE: 'Submitted News',
        isProfileMenu: true,
    },
    {
        path: PATHS.PROFILE_COMMENTS,
        TITLE: 'My comments',
        isProfileMenu: true,
    },
]
