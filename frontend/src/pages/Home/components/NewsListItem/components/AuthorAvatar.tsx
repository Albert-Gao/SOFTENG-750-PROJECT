import { Link } from 'react-router-dom'
import { PATHS } from '../../../../../routes/routes.constants'
import { getAvatarSVG } from '../../../../../utils/getAvatarSVG'

export const AuthorAvatar: React.FC<{ avatarSrc?: string; userId: string }> = ({
    avatarSrc,
    userId,
}) => (
    <Link className="flex-shrink-0" to={PATHS.USER_RAW + userId}>
        <img
            className="w-10 h-10 bg-gray-300 rounded-full"
            src={getAvatarSVG(avatarSrc as any)}
            alt="avatar"
        />
    </Link>
)
