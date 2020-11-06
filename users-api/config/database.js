module.exports = {
    // database: 'mongodb://mongo:27017/meanauth',
    database:process.env.DB_URI,
    //comment the above and comment out below if deploying locally WITHOUT Docker
    //database: 'mongodb://localhost:27017/meanauth',
    secret: process.env.JWT_SECRET
}