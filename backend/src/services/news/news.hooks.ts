import * as authentication from '@feathersjs/authentication'
import { getWikiPageInfo } from './hooks/getWikiPageInfo'
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks

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
