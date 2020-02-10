// 把所有与文章相关的操作写在这里
var article = {
  // 获取
  getFocusFive: (perpage) => $.get(APILIST.article_get, { "perpage": 5 }),
  // 根据id获取文章详情
  getById: (id) => $.get(APILIST.article_get, { id }),
  // 获取文章热门排行
  getRank: (type) => $.get(APILIST.article_rank, { type }),
  // 获取最新资讯
  getLastest: () => $.get(APILIST.article_lastest),
  // 列表页详细信息
  getList: (type, page) => $.get(APILIST.article_get, { type, page })

}