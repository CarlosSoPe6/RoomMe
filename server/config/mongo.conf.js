'use strict';

const mongoose = require('mongoose');

if (process.env.NODE_ENV === 'development')
    require('dotenv').config();
const config = {
    port: process.env.PORT || 3000,
    env: process.env.ENV || 'development',
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    dbCluster: process.env.DB_CLUSTER,
    get dbUrl() {
        return `mongodb+srv://${this.dbUser}:${this.dbPassword}@${this.dbCluster}.mongodb.net/${this.dbName}?retryWrites=true&w=majority`;
    },
    //si se desea algo especifico
    production: {
        //aquí se pone la configuración de producción
    },
    development: {
        //aquí se pone la configuraciópn de development
    }
}

console.log(config.dbUrl);

mongoose.connect(config.dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log("Not connected to database", err);
});

module.exports = mongoose;