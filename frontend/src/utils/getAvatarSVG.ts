import A02man from '../assets/02-man.svg'
import A03pirates from '../assets/03-pirates.svg'
import A04girl from '../assets/04-girl.svg'
import A05boy from '../assets/05-boy.svg'
import A07man from '../assets/07-man.svg'
import A09french from '../assets/09-french.svg'
import A11girl from '../assets/11-girl.svg'
import A13rock from '../assets/13-rock.svg'
import A14boy from '../assets/14-boy.svg'
import A16girl from '../assets/16-girl.svg'
import A20clown from '../assets/20-clown.svg'
import A24girl from '../assets/24-girl.svg'
import A27ninja from '../assets/27-ninja.svg'
import A28soldier from '../assets/28-soldier.svg'
import A29girl from '../assets/29-girl.svg'
import A30viking from '../assets/30-viking.svg'
import A31boy from '../assets/31-boy.svg'
import A37dj from '../assets/37-dj.svg'
import A38girl from '../assets/38-girl.svg'
import A40safari from '../assets/40-safari.svg'
import A41cowboy from '../assets/41-cowboy.svg'
import A47scientist from '../assets/47-scientist.svg'
import A49bellboy from '../assets/49-bellboy.svg'
import A50king from '../assets/50-king.svg'

const SVG_SRC_MAP = {
    A02man,
    A03pirates,
    A04girl,
    A05boy,
    A07man,
    A09french,
    A11girl,
    A13rock,
    A14boy,
    A16girl,
    A20clown,
    A24girl,
    A27ninja,
    A28soldier,
    A29girl,
    A30viking,
    A31boy,
    A37dj,
    A38girl,
    A40safari,
    A41cowboy,
    A47scientist,
    A49bellboy,
    A50king,
} as const

export type AvatarType = keyof typeof SVG_SRC_MAP

export const getAvatarSVG = (avatar: keyof typeof SVG_SRC_MAP) => {
    if (avatar in SVG_SRC_MAP) {
        return SVG_SRC_MAP[avatar]
    }

    // if not valid avatar key, we return random avatar
    const avatars = Object.values(SVG_SRC_MAP)
    return avatars[Math.floor(Math.random() * avatars.length)]
}
