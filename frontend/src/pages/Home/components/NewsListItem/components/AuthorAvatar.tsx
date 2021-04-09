import { getAvatarSVG } from '../../../../../utils/getAvatarSVG'

export const AuthorAvatar: React.FC<{ avatarSrc?: string }> = ({
    avatarSrc,
}) => (
    <div className="flex-shrink-0">
        <img
            className="w-10 h-10 bg-gray-300 rounded-full"
            src={getAvatarSVG(avatarSrc as any)}
            alt="avatar"
        />
    </div>
)
