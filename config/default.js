/**
 * Created by rajab on 5/28/2017.
 */
module.exports = {

    /**
     * Configure mongodb
     */
    mongo: {
        connections: {
            default: {uri: 'mongodb://localhost:27017/magoosh'}
        }
    },


    /**
     * Configure auth
     */
    auth: {
        secret: 'default',
        client: {
            discover_url: 'https://localhost:3000',
            client_id: 'magoosh',
            client_secret: ''
        }
    },

    log: {
        sentry: {
            dsn: null
        },
        audit: {},
    },

};

