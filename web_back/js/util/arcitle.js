// 把所有与文章相关的操作写在这里
var article = {
  // 获取
  get: function() {
    return $.get(APILIST.article_get)
  },
}