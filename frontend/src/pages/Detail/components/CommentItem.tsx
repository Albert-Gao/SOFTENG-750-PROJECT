import { useHistory } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import { PATHS } from '../../../routes/routes.constants'
import { Auth } from '../../../utils/Auth'
import { DateTime } from '../../../utils/DateTime'
import { getAvatarSVG } from '../../../utils/getAvatarSVG'

export const CommentItem: React.FC<{
    css?: string
    avatar?: string
    authorName: string
    text: string
    createdAt: string
    authorId: string
}> = ({ authorId, css, createdAt, avatar = '', authorName, text }) => {
    const history = useHistory()
    const { addToast } = useToasts()

    return (
        <div className={`flex space-x-3 ${css}`}>
            <div className="flex-shrink-0">
                <img
                    className="w-10 h-10 bg-gray-400 rounded-full"
                    src={getAvatarSVG(avatar)}
                    alt="avatar"
                />
            </div>
            <div>
                <div className="text-sm">
                    <a
                        onClick={(e) => {
                            e.preventDefault()
                            if (!Auth.isAuth()) {
                                addToast('Please login first', {
                                    appearance: 'error',
                                })
                                return
                            }

                            history.push(PATHS.USER_RAW + authorId)
                        }}
                        className="font-medium text-gray-900"
                    >
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
