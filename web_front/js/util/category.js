// 把所有与文章分类相关的操作写在这里
var category = {
  // 获取
  get: () => $.get(APILIST.category_get),
  // 添加
  add: (name, slug) => $.post(APILIST.category_add, { name, slug }),
  // 删除
  del: (id) => $.post(APILIST.category_del, { id }),
  // 编辑
  edit: (id, name, slug) => $.post(APILIST.category_edit, { id, name, slug }),
}