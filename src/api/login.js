import Request from "./request";

export default {
  //登录
  login: (data) => Request.POST({  //post请求
    api: 'users/login', //请求的api接口
    data  //传给后端的参数
  }),
  //注册
  register: (data) => Request.POST({
    api: 'users/register',
    data
  })
}
