import { getAvatarSVG } from '../../../utils/getAvatarSVG'

export const UserHeader: React.FC<{
    avatar: string
    nickName: string
}> = ({ avatar, nickName }) => (
    <div>
        <div className="flex max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                <div className="flex">
                    <img
                        className="z-40 w-24 h-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                        src={getAvatarSVG(avatar)}
                        alt="avatar"
                    />
                </div>
                <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                    <div className="flex-1 min-w-0 mt-6 sm:hidden 2xl:block">
                        <h1 className="text-2xl font-bold text-gray-900 truncate">
                            {nickName}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="flex-1 hidden min-w-0 mt-6 sm:block 2xl:hidden">
                <h1 className="text-2xl font-bold text-gray-900 truncate">
                    {nickName}
                </h1>
            </div>
        </div>
    </div>
)
