// news-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations'
import { Model, Mongoose, Document } from 'mongoose'

export interface NewsDocument extends Document {
    title: string
    description: string
    wikipediaUrl: string
    author: string
    votesCount: number
    commentsCount: number
}

export interface NewsModel extends Model<NewsDocument> {}

export default function (app: Application): Model<any> {
    const modelName = 'news'
    const mongooseClient: Mongoose = app.get('mongooseClient')
    const { Schema } = mongooseClient
    const schema = new Schema<NewsDocument, NewsModel>(
        {
            title: { type: String, default: '' },
            description: { type: String, default: '' },
            authorWords: { type: String, default: '' },
            wikipediaUrl: { type: String, required: true, unique: true },
            author: {
                type: Schema.Types.ObjectId,
                ref: 'users',
                required: true,
            },
            votingRecords: [
                { type: Schema.Types.ObjectId, ref: 'users', required: true },
            ],
            commentsCount: { type: Number, default: 0 },
        },
        {
            timestamps: true,
            strictQuery: 'throw',
            strict: 'throw',
        },
    )

    // This is necessary to avoid model compilation errors in watch mode
    // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
    if (mongooseClient.modelNames().includes(modelName)) {
        ;(mongooseClient as any).deleteModel(modelName)
    }
    return mongooseClient.model<NewsDocument>(modelName, schema)
}
