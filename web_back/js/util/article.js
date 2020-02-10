// 把所有与文章相关的操作写在这里
var article = {
  // 获取
  get: (page, type, status) => $.get(APILIST.article_get, { page, type, "state": status }),
  // 根据id获取文章详情
  getById: (id) => $.get(APILIST.article_get, { id }),
  // 删除
  del: (id) => $.get(APILIST.article_del, { id }),
  // 添加
  add: (fd) => {
    return $.ajax({
      url: APILIST.article_add,
      type: "post",
      data: fd,
      processData: false, //不允许修改数据
      contentType: false, //不予许设置请求头
    })
  },
  // 添加
  edit: (fd) => {
    return $.ajax({
      url: APILIST.article_edit,
      type: "post",
      data: fd,
      processData: false, //不允许修改数据
      contentType: false, //不予许设置请求头
    })
  }
}