/**
 * Created by joe on 2/21/17.
 */
"use strict";

let pg = require('pg'),
    conf = require('./_conf'),
    databaseURL = conf.DB_Conn_URI;


function limitSize(pageSize, pageNum) {

    return "LIMIT " + pageSize + " OFFSET " + ((pageNum - 1) * pageSize);
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
                conn.query(sql, values ? [] : values, function (err, result) {
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