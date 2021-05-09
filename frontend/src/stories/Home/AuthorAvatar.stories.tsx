import { ComponentProps } from 'react'
import { AuthorAvatar } from '../../pages/Home/components/NewsListItem/components/AuthorAvatar'
import { getAvatarSVG } from '../../utils/getAvatarSVG'
import { Meta } from '../utils'

export default {
    title: 'Pages/Home/AuthorAvatar',
    component: AuthorAvatar,
    argTypes: {
        avatarSrc: {
            control: {
                type: 'radio',
                options: [
                    'A02man',
                    'A03pirates',
                    'A04girl',
                    'A05boy',
                    'A07man',
                    'A09french',
                    'A11girl',
                    'A13rock',
                    'A14boy',
                    'A16girl',
                    'A20clown',
                    'A24girl',
                    'A27ninja',
                    'A28soldier',
                    'A29girl',
                    'A30viking',
                    'A31boy',
                    'A37dj',
                    'A38girl',
                    'A40safari',
                    'A41cowboy',
                    'A47scientist',
                    'A49bellboy',
                    'A50king',
                ],
            },
        },
    },
} as Meta<typeof AuthorAvatar>

export const Standard = (args: ComponentProps<typeof AuthorAvatar>) => {
    return (
        <AuthorAvatar
            userId={args.userId}
            avatarSrc={getAvatarSVG(args.avatarSrc ?? '')}
        />
    )
}
Standard.args = {
    avatarSrc: 'A02man',
    userId: 'fake-id',
}
