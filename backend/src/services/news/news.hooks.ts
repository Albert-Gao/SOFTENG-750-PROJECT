import * as authentication from '@feathersjs/authentication'
import { HookContext } from '@feathersjs/feathers'
import { getWikiPageInfo } from './hooks/getWikiPageInfo'
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks

async function removePasswordFromUserInfo(context: HookContext) {
    const data = context.result?.data

    if (!Array.isArray(data)) return context
    if (data.length === 0) return context

    const newsList = context.result.data

    const afterRemovingPassword = newsList.map((item: any) => {
        if (!item.author?.password) {
            return item
        }

        const author = item.author
        delete author.password
        delete author.__v

        return {
            ...item,
            author,
        }
    })

    context.result.data = afterRemovingPassword

    return context
}

export default {
    before: {
        all: [],
        find: [],
        get: [],
        create: [authenticate('jwt'), getWikiPageInfo],
        update: [authenticate('jwt')],
        patch: [authenticate('jwt')],
        remove: [authenticate('jwt')],
    },

    after: {
        all: [],
        find: [removePasswordFromUserInfo],
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
