/**
 * Created by joe on 2/21/17.
 */

function sleepTime(t) {
    return new Promise((resolve) => setTimeout(resolve, t));
};

function responseFormat(pageSize, pageNum, results) {

    return {"pageSize": pageSize, "page": pageNum, "result": results}
};

function responseFormatDetail(result) {

    return {"pageSize": 1, "page": 1, "result": result}
};

function responseFormatError(error) {

    return {"pageSize": 1, "page": 1, "result": error}
};


exports.resFormat = responseFormat
exports.resFormatDt = responseFormatDetail
exports.resFormatErr = responseFormatError
exports.sleepTime = sleepTime
