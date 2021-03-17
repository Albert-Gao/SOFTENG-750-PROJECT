export enum PATHS {
    ABOUT = '/about',
    DETAIL = '/detail/:id',
    HOME = '/',
    PROFILE = '/profile',
    PROFILE_FAV_LIST = '/profile/fav-list',
    PROFILE_NEWS_SUBMISSION_LIST = '/profile/news-submission',
}

export const PAGE_TITLE_MAP = [
    // for nav bar
    { path: PATHS.HOME, TITLE: 'Home' },
    { path: PATHS.ABOUT, TITLE: 'About' },
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
