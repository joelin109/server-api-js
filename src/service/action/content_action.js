let async = require('async');
let reqUtil = require('../util/HttpRequestUtil');
let resUtil = require('../util/HttpResponseUtil');
let ArticleLogic = require('../logic/article_logic');


let WordAction = {

    _doAsyncAuto :function (param, res) {

        var rs = {data: []}

        async.auto({
            getUser: function (callback) {
                console.log('getUser');
                return callback(null,8)
            },
            getOrderID: function (callback) {
                console.log('getOrderID');
                callback(null,108)
            },
            getLike: ['getUser', function (result2, callback) {
                console.log(result2);
                console.log('getLike');

                let like = result2.getUser * 8
                callback('d',like);
            }],
            getLike2: ['getUser', 'getOrderID', function (result2, callback) {

                let like2 = result2.getUser + result2.getOrderID + 8
                callback('dd',like2);
            }]

        }, function (err, result) {
            console.log(result);

            if (err) {
                rs.data = result.getLike;
                resUtil.commonJson(res, rs);
                return;
            }

            rs.data = result.getLike2;
            resUtil.commonJson(res, rs);
        });

    },

    /**
     * APP 首页，包括顶部轮播图、课程目录
     */
    doWordList: function (req, res) {

        var param = reqUtil.commonRequest(req);
        // console.log(param.token);
        // console.log(param.sitecode);
        // console.log(param.appver);
        // console.log(param.data);
        console.log(param.req_ip);
        console.log(param.req_session_id);
        console.log(param.req_host);
        console.log('');

        let _filter = param.data.filter;
        /*ArticleLogic.getArticleList(param, function (err, result) {

         console.log(result);
         //return
         resUtil.commonJson(res, result);

         })*/

        //resUtil.commonJson(res, param.data);
        this._doAsyncAuto(param, res);

    }


};



exports.WordAction = WordAction;
