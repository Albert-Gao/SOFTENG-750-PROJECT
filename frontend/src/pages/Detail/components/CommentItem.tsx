import { getAvatarSVG } from '../../../utils/getAvatarSVG'

export const CommentItem: React.FC<{ avatar?: string }> = ({ avatar = '' }) => {
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
                        Leslie Alexander
                    </a>
                </div>
                <div className="mt-1 text-sm text-gray-700">
                    <p>
                        Ducimus quas delectus ad maxime totam doloribus
                        reiciendis ex. Tempore dolorem maiores. Similique
                        voluptatibus tempore non ut.
                    </p>
                </div>
                <div className="mt-2 space-x-2 text-sm">
                    <span className="font-medium text-gray-500">4d ago</span>
                    <span className="font-medium text-gray-500">&middot;</span>
                    <button type="button" className="font-medium text-gray-900">
                        Reply
                    </button>
                </div>
            </div>
        </div>
    )
}
