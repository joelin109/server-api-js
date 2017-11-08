/**
 * Created by joe on 11/3/17.
 */
let express = require('express');
let router = express.Router();
let config = require('../_conf');
let content = require('../action/content_action');

router.post(config.APIURL_Content_Article_List, function (req, res) {

    content.ArticleAction.doArticleList(req, res)

});

module.exports = router;