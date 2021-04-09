import { PROFILE_PAGE_ICON_MAP } from '../../../components/AppShell/components/ProfilePageSideNavItem'

export const AddToFavouriteButton: React.FC<{ id: string }> = ({ id }) => {
    return (
        <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
            {PROFILE_PAGE_ICON_MAP.heart({
                css:
                    'w-5 h-5 mr-2 -ml-1 text-gray-400 group-hover:text-red-600',
            })}
            <span>Favourite</span>
        </button>
    )
}
