/**
 * Created by joe on 2/21/17.
 */

let word = require('./word'),
    conf = require('./conf/api_url');

function register(app) {

    app.get(conf.APIURL_Content_Word_List, word.findList);
};


exports.register = register

