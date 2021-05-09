import { useAtom } from 'jotai'
import React from 'react'
import { userAtom } from '../../../state'
import { getAvatarSVG } from '../../../utils/getAvatarSVG'

export const MobileProfileMenuUserInfo: React.FC = () => {
    const [user] = useAtom(userAtom)

    return (
        <div className="flex items-center px-5">
            <div className="flex-shrink-0">
                <img
                    className="w-10 h-10 rounded-full"
                    src={getAvatarSVG(user.avatar)}
                    alt="avatar"
                />
            </div>
            <div className="ml-3">
                <div className="text-base font-medium text-white">
                    {user.nickName}
                </div>
                <div className="text-sm font-medium text-indigo-300">
                    {user.email}
                </div>
            </div>
        </div>
    )
}
