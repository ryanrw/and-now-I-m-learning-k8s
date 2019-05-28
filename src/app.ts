import * as fastify from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'

const server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({})

server.get('/', (request, reply) => {
    reply.send('Hello, World!')
})

export default () => {
    server.listen(8080, '0.0.0.0', (err, _) => {
        if (err) {
            console.log(err)
            process.exit(1)
        }
        console.log('server started')
    })
}