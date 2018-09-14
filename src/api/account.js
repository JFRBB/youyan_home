import Request from "./request";

export default {
  //获取用户资料
  profile: (data) => Request.POST({
    api: 'my/profile',
    data
  }),
  //获取登录历史记录
  loginHistory: (data) => Request.POST({
    api: 'my/login-history',
    data
  }),
  //获取系统支持的币种列表
  coins: (data) => Request.POST({
    api: 'coins',
    data
  }),
  //获取“我“的钱包概览
  myWallet: (data) => Request.POST({
    api: 'my/wallet/all',
    data
  }),
}
