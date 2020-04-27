if (process.env.NODE_ENV != 'production')
    require('dotenv').config();

    module.exports = {
        port: process.env.PORT || 3000,
        env: process.env.ENV || 'development',
        dbUser: process.env.DB_USER,
        dbPassword: process.env.DB_PASSWORD,
        dbName: process.env.DB_NAME,
        dbCluster: process.env.DB_CLUSTER,
        cookieKey: process.env.COOKIE_KEY,
        get dbUrl() {
            return `mongodb+srv://${this.dbUser}:${this.dbPassword}@${this.dbCluster}.mongodb.net/${this.dbName}?retryWrites=true&w=majority`
        },
        //si se desea algo especifico
        production: {
            //aquí se pone la configuración de producción
        },
        development: {
            //aquí se pone la configuraciópn de development
        }
    };