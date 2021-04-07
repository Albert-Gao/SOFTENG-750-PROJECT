// Initializes the `news` service on path `/news`
import { ServiceAddons } from '@feathersjs/feathers'
import { Application } from '../../declarations'
import { News } from './news.class'
import createModel from '../../models/news.model'
import hooks from './news.hooks'

// Add this service to the service type index
declare module '../../declarations' {
    interface ServiceTypes {
        news: News & ServiceAddons<any>
    }
}

export default function (app: Application): void {
    const options = {
        Model: createModel(app),
        paginate: app.get('paginate'),
        whitelist: ['$populate'],
    }

    // Initialize our service with any options it requires
    // @ts-ignore
    app.use('/news', new News(options, app))

    // Get our initialized service so that we can register hooks
    const service = app.service('news')

    service.hooks(hooks)
}
