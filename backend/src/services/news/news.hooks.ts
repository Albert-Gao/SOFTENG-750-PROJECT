import * as authentication from '@feathersjs/authentication'
import { HookContext } from '@feathersjs/feathers'
import { getWikiPageInfo } from './hooks/getWikiPageInfo'
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks

async function removePasswordFromUserInfo(context: HookContext) {
    if (context.result?.data) {
        const newsList = context.result.data

        const afterRemovingPassword = newsList.map((item: any) => {
            const author = item.author
            delete author.password
            delete author.__v

            return {
                ...item,
                author,
            }
        })

        context.result.data = afterRemovingPassword
    }

    return context
}

export default {
    before: {
        all: [],
        find: [
            async (context: HookContext) => {
                context.params.query = {
                    ...context.params.query,
                    // $populate: 'users',
                }
                return context
            },
        ],
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
