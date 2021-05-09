import { useAtom } from 'jotai'
import { userAtom } from '../../state'
import { getAvatarSVG } from '../getAvatarSVG'

export const useCurrentUserAvatar = () => {
    const [{ avatar }] = useAtom(userAtom)
    return { currentUserAvatar: getAvatarSVG(avatar) }
}
