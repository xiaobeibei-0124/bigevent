// 把所有与文章相关的操作写在这里
var article = {
  // 获取
  getFocusFive: (perpage) => $.get(APILIST.article_get, { "perpage": 5 }),
  // 根据id获取文章详情
  getById: function(id) {
    return $.get(APILIST.article_get, { "id": id })
  },
  // 删除
  del: function(id) {
    return $.get(APILIST.article_del, { "id": id })
  },
  // 添加
  add: function(fd) {
    return $.ajax({
      url: APILIST.article_add,
      type: "post",
      data: fd,
      processData: false, //不允许修改数据
      contentType: false, //不予许设置请求头
    })
  },
  // 添加
  edit: function(fd) {
    return $.ajax({
      url: APILIST.article_edit,
      type: "post",
      data: fd,
      processData: false, //不允许修改数据
      contentType: false, //不予许设置请求头
    })
  }
}