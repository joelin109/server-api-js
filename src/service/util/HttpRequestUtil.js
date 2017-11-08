/**
 * Created by joe on 11/3/17.
 */
let StringUtil = require('./util.framework.string');
let SessionUtil = require('./util.framework.session');

exports.commonRequest = function (req) {

    let request = {
        token: StringUtil.getParam(req, 'token', ''),
        sitecode: StringUtil.getParam(req, 'sitecode', ''),
        channel: StringUtil.getParam(req, 'channel', ''),
        locale: StringUtil.getParam(req, 'locale', ''),
        appver: StringUtil.getParam(req, 'appver', ''),
        data: StringUtil.getParam(req, 'data'),
        ip: SessionUtil.getIp(req),
        session_id: SessionUtil.getSessionId(req),
        user_agent: SessionUtil.getUserAgent(req),
        host: "http://" + req.headers.host
    }

    SessionUtil.load(req);
    return request;

};