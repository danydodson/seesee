const config = {
    port: 4003,
    db: {
        host: `mongodb://${process.env.MONGO_HOST || 'localhost'}/`,
        database: 'PostsMongo',
        user: '',
        password: '',
        port: 3306
    },
    rabbit: {
        host: 'amqp://admin:mypass@localhost'
    }
}

export default config
