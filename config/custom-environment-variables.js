module.exports = {

    auth: {
        secret: 'AUTH_SECRET',
        client: {
            client_secret: 'AUTH_CLIENT_SECRET'
        }
    },

    mongo: {
        connections: {
            default: {uri: 'MONGO_CONNECTIONS_DEFAULT'}
        }
    },


    log: {
        sentry: {
            dsn: 'SENTRY_DSN'
        }
    }


};
