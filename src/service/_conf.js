/**
 * Created by joe on 2/21/17.
 */

exports. DB_Conn_URI = process.env.DATABASE_URL || "postgres://postgres:123456@localhost:5432/sqlrest";

exports. APIURL_Content_Channel_List = "/api/content/channel/list"
exports. APIURL_Content_Channel_Post = "/api/content/channel/post"
exports. APIURL_Content_Article_List = "/api/content/article/list"
exports. APIURL_Content_Article_Detail = "/api/content/article/detail"
exports. APIURL_Content_Article_Post = "/api/content/article/post"
exports. APIURL_Content_Article_Remove = "/api/content/article/remove"
exports. APIURL_Content_Dictionary_List = "/api/content/dictionary/list"
exports. APIURL_Content_Dictionary_Detail = "/api/content/dictionary/detail"
exports. APIURL_Content_Dictionary_Post = "/api/content/dictionary/post"
exports. APIURL_Content_Dictionary_Remove = "/api/content/dictionary/remove"