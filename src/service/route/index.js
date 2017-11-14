/**
 * Created by joe on 11/3/17.
 */
let express = require('express');
let router = express.Router();
let config = require('../_conf');
let ca = require('../action/content_action');
let articleAction = require('../action/article_action');

router.post(config.APIURL_Content_Article_List, function (req, res) {

    articleAction.asyncArticleList(req, res)

});

router.post(config.APIURL_Content_Article_Detail, function (req, res) {

    articleAction.asyncArticleDetail(req, res)

});

router.post(config.APIURL_Content_Dictionary_List, function (req, res) {

    ca.WordAction.doWordList(req, res)

});

module.exports = router;