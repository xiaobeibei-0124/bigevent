// 配置文件
// 把项目中所有用到的接口地址，全部放在这里

// 所有接口的及地址
var BASEURL = "http://192.168.1.104:8000"

// 用来保存所有的接口信息
var APILIST = {
  // 用户相关接口
  user_login: BASEURL + "/admin/login",
  user_logout: BASEURL + "/admin/logout",
  user_getInfo: BASEURL + "/admin/getuser",

  // 文章类型相关接口
  // 获取文章类型
  category_get: BASEURL + "/admin/category_search",
  // 添加文章类别
  category_add: BASEURL + "/admin/category_add",
  // 删除文章类别
  category_del: BASEURL + "/admin/category_delete",
  // 编辑文章类别
  category_edit: BASEURL + "/admin/category_edit",

  // 文章相关的接口
  // 获取文章
  article_get: BASEURL + "/admin/search",
}