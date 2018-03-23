"use strict"
/**
 * Created by joe on 11/3/17.
 */
//let coroutine = require("coroutine");
const StringUtil = require('../util/util.fw.string');
require('../util/util.fw.dao');


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

        return Conn.query(param)
            .then(
                result => ({articleListPro:result})
            )

    },

    _getArticleListCB: function (param) {

        console.log("arguments.callee");

        this._execCB(param, (result) => {

            if (result.error) {
                console.log('MsgLogDao create', result.error);
                return {
                    error: result.error
                }

                return {result};

            }
        });

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
            const sql = 'select count(id) count from t_sms'

            const {error, result} = await this._getArticleFavoriteList(param)
            const _listP = await this.getArticleListPro(param)
            //const _list = await this._getArticleListCB(param)
            const _list = await Conn.query({sql})
            const _test = "dsfsdfdsfAAAAAA"

            let _result = {
                id: StringUtil.getOrderId() || "",
                sessionID: param.sessionID || "",
                result,
                _listP,
                _list
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
