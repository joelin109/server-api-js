/**
 * Created by joe on 11/3/17.
 */
let express = require('express');
let router = express.Router();
let config = require('../_conf');
let articleAction = require('../action/content_action');

router.post(config.APIURL_Content_Article_List, function (req, res) {
    articleAction.getArticleList(req, res);
});