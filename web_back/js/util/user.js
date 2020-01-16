var user = {
  // 模块化开发
  // 把所有与用户相关的功能全部放在一个对象中
  // 用户登录
  login: function(name, password) {
    return $.post(APILIST.user_login, {
      "user_name": name,
      "password": password
    })
  },
  // 用户退出
  logout: function() {
    return $.post(APILIST.user_logout)
  },
  // 获取用户信息
  getInfo: function() {
    return $.get(APILIST.user_getInfo)
  }
}