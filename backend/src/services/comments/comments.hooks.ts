import * as authentication from '@feathersjs/authentication'
import { HookContext } from '../../app'
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks

export default {
    before: {
        all: [],
        find: [],
        get: [],
        create: [authenticate('jwt')],
        update: [authenticate('jwt')],
        patch: [authenticate('jwt')],
        remove: [authenticate('jwt')],
    },

    after: {
        all: [],
        find: [],
        get: [],
        create: [
            async (context: HookContext<any>) => {
                const newsId = context.data.news
                context.app.service('news').patch(newsId, {
                    // @ts-ignore
                    $inc: { commentsCount: 1 },
                })
                return context
            },
        ],
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
