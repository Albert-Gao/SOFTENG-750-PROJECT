import { Params } from '@feathersjs/feathers'
import { Service, MongooseServiceOptions } from 'feathers-mongoose'
import { Application } from '../../declarations'
import { NewsDocument } from '../../models/news.model'

export class News extends Service<NewsDocument> {
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(options: Partial<MongooseServiceOptions>, app: Application) {
        super(options)
    }

    async create(data: any, params: Params) {
        const news = await this._create({
            title: data.title,
        })

        return Promise.resolve(news)
    }
}
