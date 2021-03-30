import { Service, MongooseServiceOptions } from 'feathers-mongoose'
import { Application } from '../../declarations'
import { NewsDocument } from '../../models/news.model'

// async find(params: Params) {}
// async get(id: Id, params: Params) {}
// async create(data: any, params: Params) {}
// async update(id: NullableId, data: any, params: Params) {}
// async patch(id: NullableId, data: any, params: Params) {}
// async remove(id: NullableId, params: Params) {}

export class News extends Service<NewsDocument> {
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(options: Partial<MongooseServiceOptions>, app: Application) {
        super(options)
    }
}
