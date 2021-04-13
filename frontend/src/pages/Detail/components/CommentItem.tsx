import { DateTime } from '../../../utils/DateTime'
import { getAvatarSVG } from '../../../utils/getAvatarSVG'

export const CommentItem: React.FC<{
    avatar?: string
    authorName: string
    text: string
    createdAt: string
}> = ({ createdAt, avatar = '', authorName, text }) => {
    return (
        <div className="flex space-x-3">
            <div className="flex-shrink-0">
                <img
                    className="w-10 h-10 bg-gray-400 rounded-full"
                    src={getAvatarSVG(avatar)}
                    alt="avatar"
                />
            </div>
            <div>
                <div className="text-sm">
                    <a href="#" className="font-medium text-gray-900">
                        {authorName}
                    </a>
                </div>
                <div className="mt-1 text-sm text-gray-700">
                    <p>{text}</p>
                </div>
                <div className="mt-2 space-x-2 text-sm">
                    <span className="font-medium text-gray-500">
                        {DateTime.utc2LocalRelative(createdAt)}
                    </span>
                    <span className="font-medium text-gray-500">&middot;</span>
                </div>
            </div>
        </div>
    )
}
