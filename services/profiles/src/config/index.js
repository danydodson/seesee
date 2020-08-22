const config = {
    port: 4002,
    db: {
        host: `mongodb://${process.env.MONGO_HOST || 'localhost'}/`,
        database: 'ProfilesMongo',
        user: '',
        password: '',
        port: 3306
    },
    rabbit: {
        host: 'amqp://admin:mypass@localhost'
    }
}

export default config
