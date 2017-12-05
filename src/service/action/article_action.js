/**
 * Created by joe on 11/14/17.
 */
let reqUtil = require('../util/HttpRequestUtil');
let resUtil = require('../util/HttpResponseUtil');
let ArticleLogic = require('../logic/article_logic');

module.exports = ArticleAction = {

    //const asyncArticleList = async(req, res) => {
    async asyncArticleList(req, res) {

        var param = reqUtil.commonRequest(req);
        console.log(param.req_ip);
        console.log(param.req_session_id);
        console.log(param.req_host);
        console.log('');

        try {

            //let _filter = param.data.filter;
            const result = await ArticleLogic.getArticleListPro(param)
            const result4 = await ArticleLogic.getArticleList(result)

            let responseResult = {
                token: result,
                result4: result4
            }

            console.log("successful");
            console.log(responseResult);
            resUtil.commonJson(res, responseResult);

        } catch (err) {

            console.log("Failure");
            console.log(err); // 这里捕捉到错误 `error`
            resUtil.commonJson(res, err);
            return
        }

    },

    asyncArticleDetail: async function(req, res) {
        let param = reqUtil.commonRequest(req);

        resUtil.commonJson(res, param);

    }
}
