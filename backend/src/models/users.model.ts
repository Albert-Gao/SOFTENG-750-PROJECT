// users-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations'
import { Model, Mongoose } from 'mongoose'
import { getAvatars } from '../utils/getAvatars'

export default function (app: Application): Model<any> {
    const modelName = 'users'
    const mongooseClient: Mongoose = app.get('mongooseClient')
    const schema = new mongooseClient.Schema(
        {
            nickName: { type: String, required: true },
            email: {
                type: String,
                unique: true,
                trim: true,
                lowercase: true,
                required: true,
            },
            password: { type: String, trim: true, required: true },
            avatar: { type: String, enum: getAvatars(), required: true },
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
    return mongooseClient.model<any>(modelName, schema)
}
