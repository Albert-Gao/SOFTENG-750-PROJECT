import { DateTime } from '../../../utils/DateTime'
import { getAvatarSVG } from '../../../utils/getAvatarSVG'
import { SectionTitle } from './SectionTitle'

const CommentsIcon = () => (
    <svg
        className="w-5 h-5 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
            clipRule="evenodd"
        />
    </svg>
)

const LikeIcon = () => (
    <svg
        className="w-5 h-5 text-green-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
    >
        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
    </svg>
)

const DateTimeIcon = () => (
    <svg
        className="w-5 h-5 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
        />
    </svg>
)

export const InfoPanel: React.FC<{
    isMobile: boolean
    createdAt: string
    authorNickName: string
    authorAvatar: string
    commentsCount: number
    votesCount: number
}> = ({
    commentsCount = 0,
    votesCount = 0,
    isMobile,
    createdAt,
    authorNickName,
    authorAvatar,
}) => {
    return (
        <aside
            className={isMobile ? 'mt-8 xl:hidden' : 'hidden xl:block xl:pl-8'}
        >
            <h2 className="sr-only">Details</h2>
            <div className="space-y-5">
                <div className="flex items-center space-x-2">
                    {/* <!-- Heroicon name: solid/lock-open --> */}
                    <LikeIcon />
                    <span className="text-sm font-medium text-green-700">
                        {votesCount} Likes
                    </span>
                </div>
                <div className="flex items-center space-x-2">
                    {/* <!-- Heroicon name: solid/chat-alt --> */}
                    <CommentsIcon />
                    <span className="text-sm font-medium text-gray-900">
                        {commentsCount} comments
                    </span>
                </div>
                <div className="flex items-center space-x-2">
                    {/* <!-- Heroicon name: solid/calendar --> */}
                    <DateTimeIcon />
                    <span className="text-sm font-medium text-gray-900">
                        Created on{' '}
                        <time dateTime="2020-12-02">
                            {DateTime.utc2LocalRelative(createdAt)}
                        </time>
                    </span>
                </div>
            </div>
            <div className="py-6 mt-6 space-y-8 border-t border-gray-200">
                <div>
                    <SectionTitle>Creator</SectionTitle>
                    <ul className="mt-3 space-y-3">
                        <li className="flex justify-start">
                            <a href="#" className="flex items-center space-x-3">
                                <div className="flex-shrink-0">
                                    <img
                                        className="w-5 h-5 rounded-full"
                                        src={getAvatarSVG(authorAvatar)}
                                        alt="avatar"
                                    />
                                </div>
                                <div className="text-sm font-medium text-gray-900">
                                    {authorNickName}
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}
