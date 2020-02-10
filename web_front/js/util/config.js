// 配置文件
// 把项目中所有用到的接口地址，全部放在这里

// 所有接口的及地址
const BASEURL = "http://192.168.1.104:8000"

// 用来保存所有的接口信息
const APILIST = {
  // 文章类型相关接口
  // 获取文章类型
  category_get: BASEURL + "/category",

  // 文章相关的接口
  // 获取文章
  article_get: BASEURL + "/search",

  // 获取文章热门
  article_rank: BASEURL + "/rank",

  // 获取最新资讯
  article_lastest: BASEURL + "/lastest",

  // 获取文章详情
  article_detail: BASEURL + "/article",

  // 添加评论
  comment_add: BASEURL + "/post_comment",
}