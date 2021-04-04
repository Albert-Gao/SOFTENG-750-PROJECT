import app from '../../src/app'
import { describe, expect, it } from '@jest/globals'

describe('"news" service', () => {
    it('registered the service', () => {
        const service = app.service('news')
        expect(service).toBeTruthy()
    })

    it('should throw 400 when the request sender is not matching the request body object id', async () => {
        const service = app.service('news')

        async function call() {
            return service.create({ wikipediaUrl: '', author: '' })
        }

        expect(call()).toThrow()
    })
})
