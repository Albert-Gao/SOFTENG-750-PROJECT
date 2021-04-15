import logger from './logger'
import app from './app'

const port = app.get('port')
const server = app.listen(port)

process.on('unhandledRejection', (reason, p) =>
    logger.error('Unhandled Rejection at: Promise ', p, reason),
)
console.log('process.env.PORT', process.env.PORT)
server.on('listening', () =>
    logger.info(
        'Feathers application started on http://%s:%d',
        app.get('host'),

        process.env.PORT != null ? process.env.PORT : app.get('port'),
    ),
)
