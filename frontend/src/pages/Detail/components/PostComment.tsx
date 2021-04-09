import { useCurrentUserAvatar } from '../../../utils/hooks/useCurrentUserAvatar'

const CurrentuserAvatar: React.FC = () => {
    const { currentUserAvatar } = useCurrentUserAvatar()

    return (
        <img
            className="w-10 h-10 bg-gray-300 rounded-full"
            src={currentUserAvatar}
            alt="avatar"
        />
    )
}

const NiceWords: React.FC = () => (
    <p className="inline-flex items-start space-x-2 text-sm text-gray-500 group">
        <svg
            className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
            />
        </svg>
        <span>Please be kind to the others :)</span>
    </p>
)

export const PostComment: React.FC = () => {
    return (
        <div className="px-4 py-6 mb-12 bg-gray-50 sm:px-6">
            <div className="flex space-x-3">
                <div className="flex-shrink-0">
                    <CurrentuserAvatar />
                </div>
                <div className="flex-1 min-w-0">
                    <form action="#">
                        <div>
                            <label htmlFor="comment" className="sr-only">
                                About
                            </label>
                            <textarea
                                id="comment"
                                name="comment"
                                rows={3}
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Add a note"
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                            <NiceWords />
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Comment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
