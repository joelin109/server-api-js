/**
 * Created by joe on 11/3/17.
 */
let reqUtil = require('../util/HttpRequestUtil');
let resUtil = require('../util/HttpResponseUtil');
let al = require('../logic/article_logic');

let ArticleAction = {

    /**
     * APP 首页，包括顶部轮播图、课程目录
     */
    getArticleList: function (req, res) {

        al.ArticleLogic.getArticleList()

    }
};



exports.ArticleAction = ArticleAction;