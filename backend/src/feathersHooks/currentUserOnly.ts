import { HookContext } from '@feathersjs/feathers'
import { BadRequest } from '@feathersjs/errors'

export const currentUserOnly = (propertyOnDataToCheck: string) => {
    return async (context: HookContext) => {
        const currentAuthUserId = (context.params.user?._id ?? '').toString()

        if (context.data[propertyOnDataToCheck] !== currentAuthUserId) {
            throw new BadRequest(
                'The news can only be created by the authenticated user',
            )
        }

        return context
    }
}
