/**
 * Created by joe on 2/21/17.
 */
module.exports = {

    databaseURL: process.env.DATABASE_URL || "postgres://postgres:123456@localhost:5432/sqlrest",
    APIURL_Content_Word_List:  "/api/content/dictionary/list",
    APIURL_Content_Article_List:  "/api/content/article/list",
    APIURL_Content_Article_Detail:  "/api/content/article/detail"
};