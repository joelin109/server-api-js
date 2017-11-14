/**
 * Created by joe on 11/14/17.
 */
let reqUtil = require('../util/HttpRequestUtil');
let resUtil = require('../util/HttpResponseUtil');
let ArticleLogic = require('../logic/article_logic');

module.exports = ArticleAction = {

    asyncArticleList: async function(req, res) {
        var param = reqUtil.commonRequest(req);
        console.log(param.req_ip);
        console.log(param.req_session_id);
        console.log(param.req_host);
        console.log('');

        //let _filter = param.data.filter;
        const err = null;
        const result2 = await ArticleLogic.getArticleList2(err, param)
        if (err) {
            resUtil.commonJson(res, result2);
            return
        }

        const result3 = await ArticleLogic.getArticleList3(param)
        const result4 = await ArticleLogic.getArticleList4(result2)

        let result = {
            token: result2,
            sitecode: result3,
            result4: result4
        }

        console.log(result);
        resUtil.commonJson(res, result);

    },

    asyncArticleDetail: async function(req, res) {
        let param = reqUtil.commonRequest(req);

        resUtil.commonJson(res, param);

    }
}

//exports.ArticleAction = ArticleAction;