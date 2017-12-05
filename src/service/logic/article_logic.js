/**
 * Created by joe on 11/3/17.
 */
//let coroutine = require("coroutine");
let StringUtil = require('../util/util.framework.string');

let ArticleLogic = {

    getArticleList: function (param) {

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

        return result;

    },

    getArticleList2: function (param) {

        console.log(StringUtil.getOrderId());


        let result = {
            //error: 1,
            code: "1",
            orderID: StringUtil.getOrderId() || "",
            sessionID: param.req_session_id || ""
        };
        let err = null

        return {err, result};
    },


    getArticleListCB: function (param, callback) {

        console.log(StringUtil.getOrderId());

        let result = {
            code: "7",
            orderID: StringUtil.getOrderId() || "",
            sessionID: param.req_session_id || ""
        };
        return {err, result};

        //coroutine.sleep(2000);
        //callback(result);


    },

    getArticleListPro: function (param) {

        return new Promise(function (resolve, reject) {

            let orderID = StringUtil.getOrderId();
            let err = 'fff'

            if(orderID){
                console.log(orderID);

                let result = {
                    code: "getArticleList5",
                    orderID: orderID || "",
                    sessionID:param.req_session_id
                };

                resolve(result);

            }
            else {

                let result = {
                    code: "error",
                    orderID:  "rggfd"
                };
                reject({err, result});
            }

        });


    }



}

module.exports = ArticleLogic
