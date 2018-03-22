/**
 * Created by joe on 11/3/17.
 */
let StringUtil = require('./util.fw.string');
let SessionUtil = require('./util.fw.session');

exports.commonRequest = function (req) {

    let request = {
        token: StringUtil.getParam(req, 'token', ''),
        sitecode: StringUtil.getParam(req, 'sitecode', ''),
        channel: StringUtil.getParam(req, 'channel', ''),
        locale: StringUtil.getParam(req, 'locale', ''),
        appver: StringUtil.getParam(req, 'appver', ''),
        data: StringUtil.getParam(req, 'data'),
        req_ip: SessionUtil.getIp(req),
        req_session_id: SessionUtil.getSessionId(req),
        req_user_agent: SessionUtil.getUserAgent(req),
        req_host: "http://" + req.headers.host
    }

    return request;

};