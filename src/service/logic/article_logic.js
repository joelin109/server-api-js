/**
 * Created by joe on 11/3/17.
 */
let StringUtil = require('../util/util.framework.string');

let ArticleLogic = {

    getArticleList: function (param, callback) {

        console.log(StringUtil.getOrderId());

        let result = {
            "code": "1",
            "orderID": StringUtil.getOrderId() || "",
            "sessionID": param.req_session_id || ""
        };

        callback(null, result);
    },

    getArticleList2: function (err, param) {

        console.log(StringUtil.getOrderId());
        err = 1;

        let result = {
            //error: 1,
            code: "1",
            orderID: StringUtil.getOrderId() || "",
            sessionID: param.req_session_id || ""
        };

        return err, result;
    },

    getArticleList3: function (param) {

        console.log(StringUtil.getOrderId());

        let result = {
            "code": "2",
            "orderID": StringUtil.getOrderId() || "",
            "sessionID": param.req_session_id || ""
        };

        return result;
    },
    getArticleList4: function (param) {

        console.log(StringUtil.getOrderId());

        let result = {
            "code": "0",
            "orderID": StringUtil.getOrderId() || "",
            "sessionID": param.sessionID || ""
        };

        return null, result;
    }

}

module.exports = ArticleLogic
