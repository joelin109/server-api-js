"use strict";

let conn = require('./sql/conn');
let r = require('./util/response');

let escape = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

let findList = (req, res, next) => {

    let pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 20,
        pageNum = req.query.page ? parseInt(req.query.page) : 1,
        values = [];

    let _sql = "SELECT id, wort, wort_sex as WortSex, plural, zh,en, is_regel as isregel, is_recommend as isrecommend" +
        " FROM content_dictionary_de ORDER BY wort " + conn.limit(pageSize, pageNum);


    conn.query(_sql, values)
        .then(results => {
            return res.json(r.format(pageSize, pageNum, results));

        })
        .catch(next);
};


exports.findList = findList;
