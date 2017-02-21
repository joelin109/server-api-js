/**
 * Created by joe on 2/21/17.
 */
"use strict";

let pg = require('pg'),
    config = require('./../conf/sql'),
    databaseURL = config.databaseURL;


function limitSize(pageSize, pageNum) {

    let _limit = "LIMIT " + pageSize + " OFFSET " + ((pageNum - 1) * pageSize);
    return _limit
};

function queryLimit(sql, values, pageSize, pageNum, singleItem, dontLog) {

    let queryLimit = sql + limitSize(pageSize, pageNum)
    return query(sql, values)

};

function query(sql, values, singleItem, dontLog) {
    console.log(sql, values);

    if (!dontLog) {
        //console.log(sql, values);
    }

    return new Promise((resolve, reject) => {

        pg.connect(databaseURL, function (err, conn, done) {
            if (err) return reject(err);
            try {
                conn.query(sql, values, function (err, result) {
                    done();
                    if (err) {
                        reject(err);
                    } else {
                        resolve(singleItem ? result.rows[0] : result.rows);
                    }
                });
            }
            catch (e) {
                done();
                reject(e);
            }
        });

    });

};


exports.query = query
exports.queryLimit = queryLimit
exports.limit = limitSize