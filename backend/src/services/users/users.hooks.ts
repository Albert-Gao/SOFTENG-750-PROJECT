import * as feathersAuthentication from '@feathersjs/authentication'
import * as local from '@feathersjs/authentication-local'
import { HookContext } from '@feathersjs/feathers'
import { getAvatars } from '../../utils/getAvatars'
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = feathersAuthentication.hooks
const { hashPassword, protect } = local.hooks

async function addNickNameFromEmail(context: HookContext) {
    const email = context.data.email
    const nickName = email.substring(0, email.lastIndexOf('@'))

    context.data = {
        ...context.data,
        nickName,
    }

    return context
}

async function addRandomAvatar(context: HookContext) {
    const avatars = getAvatars()
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)]

    context.data = {
        ...context.data,
        avatar: randomAvatar,
    }

    return context
}

export default {
    before: {
        all: [],
        find: [authenticate('jwt')],
        get: [authenticate('jwt')],
        create: [
            hashPassword('password'),
            addNickNameFromEmail,
            addRandomAvatar,
        ],
        update: [hashPassword('password'), authenticate('jwt')],
        patch: [hashPassword('password'), authenticate('jwt')],
        remove: [authenticate('jwt')],
    },

    after: {
        all: [
            // Make sure the password field is never sent to the client
            // Always must be the last hook
            protect('password'),
        ],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },
}
