/**
 * Created by joe on 11/14/17.
 */
let reqUtil = require('../util/HttpRequestUtil');
let resUtil = require('../util/HttpResponseUtil');
let ArticleLogic = require('../logic/article_logic');

module.exports = ArticleAction = {

    //async asyncArticleList(req, res) {
    asyncArticleList: async function (req, res) {

        var param = reqUtil.commonRequest(req);
        console.log(param.req_ip);
        console.log(param.req_session_id);
        console.log(param.req_host);

        try {

            //let _filter = param.data.filter;
            const result = await ArticleLogic.getArticleList(param)
            const resultP = await ArticleLogic.getArticleListPro(result)

            let responseResult = {
                token: param.req_session_id,
                result: result,
                resultP
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


    asyncArticleDetail: async (req, res) => {
        let param = reqUtil.commonRequest(req);

        try {

            //let _filter = param.data.filter;
            const result = await ArticleLogic.getArticleDetail(param)

            let responseDetailResult = {
                detail: result,
            }

            console.log("successful");
            console.log(responseDetailResult);
            resUtil.commonJson(res, responseDetailResult);

        } catch (err) {

            console.log("Failure");
            console.log(err); // 这里捕捉到错误 `error`
            resUtil.commonJson(res, err);
            return
        }

    }
}
