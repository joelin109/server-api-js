module.exports =  Config = require('../Config');

module.exports = Conn = {
    pool: false,
    execute: function (paramObj) {
        "use strict";

    },
    runQuery: function (paramObj) {

        return this.execute(paramObj)

    }
};

module.exports= DB = {
    pool: false,
    debug: false,
    getPool: function () { //获取连接池
        if (!this.pool) {
            this.pool = require('mysql').createPool({
                //connectionLimit: Config.db.connectionLimit, //important
                host: Config.db.host,
                user: Config.db.user,
                password: Config.db.password,
                database: Config.db.database
            });
            this.debug = Config.debug
        }
        return this.pool;
    },
    exec: function (paramObj) { //执行SQL
        var that = this;
        var sql2=StringUtil.trim(paramObj.sql).toLowerCase();
        if(paramObj.page && sql2.indexOf("select ")!=-1){
            var param1={sql:paramObj.sqlCount,param:paramObj.param,callback:function(rs){
                var totalRow=0;
                if(rs.status){
                    totalRow=rs.data;
                }
                var pageObj = new PaginationObj(paramObj.page.currPage, paramObj.page.pageSize, paramObj.page.pageNum, totalRow);
                if(totalRow>0){
                    var sql = paramObj.sql + " limit " + pageObj.startRow + "," + pageObj.pageSize;
                    var param2={sql:sql,param:paramObj.param,callback:function(rs2){
                        rs2.sqlCount=paramObj.sqlCount;
                        if(rs2.status){
                            pageObj.data = rs2.data;
                            rs2.data=pageObj;
                            rs2.row=pageObj.data?pageObj.data.length:0;
                            if(paramObj.callback){
                                paramObj.callback(rs2);
                            }
                        }else{
                            if(paramObj.callback){
                                paramObj.callback(rs2);
                            }
                        }
                    }};
                    that.execSql(param2);
                }else{
                    rs.sqlCount=paramObj.sqlCount;
                    rs.sql=paramObj.sql;
                    rs.data=pageObj;
                    rs.row=0;
                    paramObj.callback(rs);
                }
            }};
            that.execSql(param1);
        }else if(sql2.indexOf("insert ")!=-1 && StringUtil.isJsonObjArray(paramObj.param)) {
            if( sql2.indexOf(" set ")!=-1){ //set 只支持单个json对象，json对象数组需要 async.forEach
                var rs={status:false,error:null,data:[],row:0,sql:paramObj.sql,param:paramObj.param},i= 0,len=paramObj.param.length;
                async.forEach(paramObj.param,function(item,callback){
                    var param2={sql:paramObj.sql,param:item,callback:function(results){
                        ++i;
                        if(results.status){
                            rs.status=true;
                            rs.row++;
                        }else{
                            rs.error=results.error;
                        }
                        rs.data.push(results.data);
                        if(i==len){
                            callback(rs);
                        }
                    }};
                    that.execSql(param2);
                },function(results){
                    paramObj.callback(rs);
                });
            }else{
                var keys= StringUtil.splits(StringUtil.getText(paramObj.sql,"(",")",false),",","",true,false);
                var values=StringUtil.getArraysFromJsonObj(keys,paramObj.param);
                paramObj.paramOld=paramObj.param;
                paramObj.param=[values];
                that.execSql(paramObj);
            }
        }else{
            that.execSql(paramObj);
        }
    },
    execSql: function (paramObj) { //执行SQL
        var that = this;
        var rs={status:false,error:null,data:null,row:0,sql:paramObj.sql,param:paramObj.param,paramOld:paramObj.paramOld};

        this.getPool().getConnection(function (err, conn) {
            if (err) {
                if (conn) conn.release();
                rs.error=err;
                StringUtil.error(paramObj,err,err.stack);
                paramObj.callback(rs);
            } else {
                conn.query(rs.sql, rs.param, function (err, rows) {
                    if (conn) conn.release();
                    if (paramObj.callback) {
                        if (err) {
                            rs.error=err;
                            StringUtil.error(paramObj,err,err.stack);
                            paramObj.callback(rs);
                        } else {
                            rs.status=true;
                            var sql2=StringUtil.trim(rs.sql).toLowerCase();
                            if(sql2.indexOf("select ")!=-1 || sql2.indexOf("show ")!=-1) {
                                var c=sql2.substring(7).trim();
                                if(c.indexOf("count(")==0){
                                    rs.data=0;
                                    if(rows&&rows.length==1){
                                        for (var x in rows[0]) {
                                            rs.data = rows[0][x];
                                            break;
                                        }
                                    }
                                    rs.row=rs.data;
                                }else{
                                    rs.data = rows;
                                    rs.row = (rs.data ? rs.data.length : 0);
                                }
                            }else if(sql2.indexOf("insert ")!=-1) {
                                rs.data = rows.insertId;
                                rs.row = (rs.data ? 1 : 0);
                            }else{
                                rs.row=rows.affectedRows;
                            }
                            paramObj.callback(rs);
                        }
                    }
                });
            }
        });
    },
    test: function () { //执行测试SQL
        var that = this;
        var param = {sql: "show tables", param: null, callback: function (rs) {
            console.log("Config=" + JSON.stringify(Config));
            if (rs.status) {
                var tables = [];
                for (var i = 0; i < rs.data.length; i++) {
                    var obj = rs.data[i];
                    for (var key in obj) {
                        tables.push(obj[key]);
                    }
                }
                console.log("database connect test is ok. \nshow tables: " + JSON.stringify(tables));
            } else {
                console.log("database connect test is failed. \nError " + JSON.stringify(rs.error));
            }
        }};
        this.exec(param);
    }
};
