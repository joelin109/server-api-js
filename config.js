var run_model = 'local';
var Config;

if (run_model == 'local') {

    Config = {
        db: {
            connectionLimit: 100, //important
            host: 'test.bstcine.com',
            user: 'root',
            password: '111111',
            database: 'cine_web',
            debug: false
        },
        redis: {
            "host": "test.bstcine.com",
            "port": "6379",
            "ttl": 60 * 60    //Session的有效期为30天 60 * 60 * 24 * 30
        },
        session: {
            secret: "bstcine.com",
            resave: true,
            saveUninitialized: true
        }

    }

}


module.exports = Config;
