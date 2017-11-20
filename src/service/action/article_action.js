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
        const {err, result} = await ArticleLogic.getArticleList2(param)
        if (err) {
            resUtil.commonJson(res, result);
            return
        }

        const result3 = await ArticleLogic.getArticleList3(param)
        const result4 = await ArticleLogic.getArticleList4(result3)

        let responseResult = {
            token: result,
            sitecode: result3,
            result4: result4
        }

        console.log(responseResult);
        resUtil.commonJson(res, responseResult);

    },

    asyncArticleDetail: async function(req, res) {
        let param = reqUtil.commonRequest(req);

        resUtil.commonJson(res, param);

    }
}
