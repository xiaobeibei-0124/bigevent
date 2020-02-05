// 把所有与文章相关的操作写在这里
var article = {
  // 获取
  get: function(page, type, status) {
    return $.get(APILIST.article_get, { "page": page, "type": type, "state": status })
  },
  // 删除
  del: function(id) {
    return $.get(APILIST.article_del, { "id": id })
  },
}