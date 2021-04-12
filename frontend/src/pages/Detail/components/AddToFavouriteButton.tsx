import { PROFILE_PAGE_ICON_MAP } from '../../../components/AppShell/components/ProfilePageSideNavItem'
import { Spinner } from '../../../components/Spinner'
import { useFavAction } from '../../../utils/hooks/useFavAction'

export const AddToFavouriteButton: React.FC<{ id: string }> = ({ id }) => {
    const { status, addOrRemoveFav, hasAddedToFav } = useFavAction(id)

    return (
        <button
            onClick={addOrRemoveFav}
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
            {status === 'loading' ? (
                <Spinner height={15} width={15} />
            ) : (
                <>
                    {PROFILE_PAGE_ICON_MAP.heart({
                        css: `w-5 h-5 mr-2 -ml-1 ${
                            hasAddedToFav ? 'text-red-600' : 'text-gray-400'
                        } group-hover:text-red-600`,
                    })}
                    <span>{hasAddedToFav ? 'Remove' : 'Favourite'}</span>
                </>
            )}
        </button>
    )
}
