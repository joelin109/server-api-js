"use strict";
let express = require('express');
let session = require('express-session');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let router = require('./src/service/route/index');
let app = express();
let Config = require('./config');
let app_port = process.env.PORT || 5003;


app.use(session({
    //store: new RedisStore(Config.redis),
    key: Config.session.key,
    secret: Config.session.secret,
    cookie: Config.session.cookie,
    resave: Config.session.resave,
    saveUninitialized: Config.session.saveUninitialized
}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(cookieParser());
app.use('/', express.static(__dirname + '/www'));

/* Adding CORS support */
app.all('*', function (req, res, next) {
    // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

    if (req.method === 'OPTIONS') {
        res.send();
    } else {
        next();
    }
});

//let api = require('./src/service/api_register');
//api.register(app)

app.use('/', router);
app.set('port', app_port);
app.listen(app_port, function () {

    console.log('Express server listening on port ' + app_port);
});
