import { getAvatarSVG } from '../utils/getAvatarSVG'

export const AvatarWall: React.FC<{
    avatarList: Array<{ _id: string; avatar: string }>
}> = ({ avatarList }) => (
    <div className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-5">
        <div className="flex -space-x-1 overflow-hidden">
            {avatarList.map(({ _id, avatar }) => (
                <img
                    key={_id}
                    className="inline-block w-6 h-6 bg-gray-300 rounded-full ring-2 ring-white"
                    src={getAvatarSVG(avatar)}
                    alt="Dries Vincent"
                />
            ))}
        </div>
    </div>
)
