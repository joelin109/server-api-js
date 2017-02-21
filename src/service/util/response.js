/**
 * Created by joe on 2/21/17.
 */

function format(pageSize, pageNum, results) {

    return {"pageSize": pageSize, "page": pageNum, "result": results}
};


exports.format = format