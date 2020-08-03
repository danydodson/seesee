const config = {
    port: 3000,
    services: {
        users: process.env.USERS ? `http://${process.env.USERS}` : 'http://localhost:4001',
        profiles: process.env.PROFILES ? `http://${process.env.PROFILES}` : 'http://localhost:4002',
        posts: process.env.POSTS ? `http://${process.env.POSTS}` : 'http://localhost:4003',
    },
    rabbit: {
        host: `amqp://${process.env.RABBITMQ_DEFAULT_USER || 'admin'}:${process.env.RABBITMQ_DEFAULT_PASS || 'mypass'}@${process.env.RABBIT || 'localhost'}`
    }
}

export default config
