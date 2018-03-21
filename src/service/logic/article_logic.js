"use strict"
/**
 * Created by joe on 11/3/17.
 */
//let coroutine = require("coroutine");
let StringUtil = require('../util/util.framework.string');


const ArticleLogic = {

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


    },


    _getArticleListCB: function (param, callback) {

        console.log(StringUtil.getOrderId());

        let result = {
            code: "7",
            orderID: StringUtil.getOrderId() || "",
            sessionID: param.req_session_id || ""
        };
        return {error, result};

        //coroutine.sleep(2000);
        //callback(result);

    },

    _getArticleFavoriteList: (param) => {

        console.log(StringUtil.getOrderId());


        let result = {
            code: "1",
            orderID: StringUtil.getOrderId() || "",
            sessionID: param.req_session_id || ""
        };
        let err = null

        return {err, result};
    },

    getArticleDetail: async function (param) {
        try {

            console.log("this");
            console.log(this);

            const {error, result} = await this._getArticleFavoriteList(param)
            const _listP = await this.getArticleListPro(param)
            //return this.getArticleListPro(param)

            let _result = {
                id: StringUtil.getOrderId() || "",
                sessionID: param.sessionID || "",
                result,
                _listP
            };

            return _result;


        } catch (err) {

            console.log("Failure");
            console.log(err); // 这里捕捉到错误 `error`
            return {
                id: StringUtil.getOrderId() || "",
                err: err
            };

        }

    }



}

module.exports = ArticleLogic
