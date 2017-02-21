/**
 * Created by joe on 2/21/17.
 */

let conf = require('./_conf'),
    word = require('./word'),
    article = require('./article');

function register(app) {

    app.get(conf.APIURL_Content_Word_List, word.findList);
    app.get(conf.APIURL_Content_Article_List, article.findList);
    app.get(conf.APIURL_Content_Article_Detail, article.detail);
};


exports.register = register

