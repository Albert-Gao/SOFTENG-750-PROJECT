import { Link } from 'react-router-dom'
import { PROFILE_PAGE_ICON_MAP } from '../../../../../components/AppShell/components/ProfilePageSideNavItem'
import { Spinner } from '../../../../../components/Spinner'
import { PATHS } from '../../../../../routes/routes.constants'
import { useFavAction } from '../../../../../utils/hooks/useFavAction'

export const NewsItemMenu: React.FC<{ isMenuOpen: boolean; id: string }> = ({
    isMenuOpen,
    id,
}) => {
    const { status, addOrRemoveFav, hasAddedToFav } = useFavAction(id)

    if (!isMenuOpen) return null

    return (
        <div
            className="absolute right-0 z-50 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu-0"
        >
            <div className="py-1" role="none">
                {status === 'loading' ? (
                    <Spinner height={20} width={20} />
                ) : (
                    <button
                        className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={addOrRemoveFav}
                    >
                        {PROFILE_PAGE_ICON_MAP.heart({
                            css: `w-5 h-5 mr-3 ${
                                hasAddedToFav ? 'text-red-600' : 'text-gray-400'
                            }`,
                        })}

                        <span>
                            {hasAddedToFav ? 'Remove from' : 'Add to'} favorites
                        </span>
                    </button>
                )}

                <Link
                    to={PATHS.DETAIL_RAW + id}
                    className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                >
                    <svg
                        className="w-5 h-5 mr-3 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                    </svg>
                    <span>Check detail</span>
                </Link>
            </div>
        </div>
    )
}
