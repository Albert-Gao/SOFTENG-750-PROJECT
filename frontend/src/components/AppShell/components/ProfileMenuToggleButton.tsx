import { useAtom } from 'jotai'
import React from 'react'
import { userAtom } from '../../../state'
import { getAvatarSVG } from '../../../utils/getAvatarSVG'

export const ProfileMenuToggleButton: React.FC<{
    onClick: React.EventHandler<React.SyntheticEvent>
}> = ({ onClick }) => {
    const [user] = useAtom(userAtom)

    return (
        <div>
            <button
                type="button"
                className="flex text-sm text-white bg-indigo-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                id="user-menu"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={onClick}
            >
                <span className="sr-only">Open user menu</span>
                <img
                    className="w-8 h-8 bg-gray-300 rounded-full"
                    src={getAvatarSVG(user.avatar)}
                    alt="avatar"
                />
            </button>
        </div>
    )
}
