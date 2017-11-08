"use strict";

let conn = require('./../_conn');
let u = require('./../_util');

//let escape = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

let findList = (req, res, next) => {

    let pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 20,
        pageNum = req.query.page ? parseInt(req.query.page) : 1;


    let _sql = "SELECT id, wort, wort_sex as WortSex, plural, zh,en, is_regel as isregel, is_recommend as isrecommend"
        + " FROM content_dictionary_de ORDER BY wort " + conn.limit(pageSize, pageNum);

    conn.query(_sql)
        .then(
            results => {
                let _response = u.resFormat(pageSize, pageNum, results);
                return res.json(_response);
            }
        )
        .catch(next);
};


exports.findList = findList;
