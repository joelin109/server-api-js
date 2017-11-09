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
    doArticleList: function (req, res) {

        var param = reqUtil.commonRequest(req);
        console.log(param.token);
        console.log(param.sitecode);
        console.log(param.appver);
        console.log(param.data);
        console.log(param.req_ip);
        console.log(param.req_session_id);
        console.log(param.req_host);
        console.log('');


        //al.ArticleLogic.getArticleList()

        resUtil.commonJson(res, param.data);

    }
};



exports.ArticleAction = ArticleAction;