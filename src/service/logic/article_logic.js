/**
 * Created by joe on 11/3/17.
 */
let StringUtil = require('../util/util.framework.string');

let ArticleLogic = {

    getArticleList: function (param, callback) {

        console.log(StringUtil.getOrderId());

        let result = {
            code: "1",
            orderID: StringUtil.getOrderId() || "",
            sessionID: param.req_session_id || ""
        };

        callback(null, result);
    },

    getArticleList2: function (param) {

        console.log(StringUtil.getOrderId());


        let result = {
            //error: 1,
            code: "1",
            orderID: StringUtil.getOrderId() || "",
            sessionID: param.req_session_id || ""
        };

        return {err:null, result:result};
    },

    getArticleList3: function (param) {

        console.log(StringUtil.getOrderId());

        let result = {
            code: "2",
            orderID: StringUtil.getOrderId() || "",
            sessionID: param.req_session_id || ""
        };

        return result;
    },
    getArticleList4: function (param) {

        console.log(StringUtil.getOrderId());
        var roadPoem = `Then took the other, as just as fair,
        And having perhaps the better claim
        Because it was grassy and wanted wear,
        Though as for that the passing there
        Had worn them really about the same,`;


        let result = {
            code: roadPoem,
            orderID: StringUtil.getOrderId() || "",
            sessionID: param.sessionID || ""
        };

        return null, result;
    }

}

module.exports = ArticleLogic
