// 把所有与文章分类相关的操作写在这里
var category = {
  // 获取
  get: function() {
    return $.get(APILIST.category_get)
  },
  // 添加
  add: function(name, slug) {
    return $.post(APILIST.category_add, {
      "name": name,
      "slug": slug
    })
  },
  // 删除
  del: function(id) {
    return $.post(APILIST.category_del, {
      "id": id
    })
  },

}