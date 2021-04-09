import { useLocation } from 'react-router-dom'
import { PATHS } from '../../../routes/routes.constants'
import { ProfilePageSideNavItem } from './ProfilePageSideNavItem'

export const ProfilePageSideNav: React.FC = () => {
    const { pathname } = useLocation()

    return (
        <aside className="py-6 lg:col-span-3">
            <nav className="space-y-1">
                <ProfilePageSideNavItem
                    path={PATHS.PROFILE}
                    isSelected={pathname === PATHS.PROFILE}
                    label="Profile"
                    iconType="profile"
                />
                <ProfilePageSideNavItem
                    path={PATHS.PROFILE_PRIVACY}
                    isSelected={pathname === PATHS.PROFILE_PRIVACY}
                    label="Privacy"
                    iconType="cogwheel"
                />
                <ProfilePageSideNavItem
                    path={PATHS.PROFILE_FAV_LIST}
                    isSelected={pathname === PATHS.PROFILE_FAV_LIST}
                    label="Favourites"
                    iconType="heart"
                />
                <ProfilePageSideNavItem
                    path={PATHS.PROFILE_NEWS_SUBMISSION_LIST}
                    isSelected={pathname === PATHS.PROFILE_NEWS_SUBMISSION_LIST}
                    label="Submitted News"
                    iconType="integration"
                />
                <ProfilePageSideNavItem
                    path={PATHS.PROFILE_COMMENTS}
                    isSelected={pathname === PATHS.PROFILE_COMMENTS}
                    label="My comments"
                    iconType="document"
                />
            </nav>
        </aside>
    )
}
