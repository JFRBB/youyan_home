import axios from "axios";
import {message} from 'antd';
import md5 from 'blueimp-md5';
import CryptoJS from 'crypto-js';
import querystring from 'querystring';
import {encryptByDES, decryptByDES} from '../common/function';
import { hashHistory } from 'react-router';
import { getToken } from 'function';

let subDomain = '';

let param = {
  // v: 'v1',    //api的版本
}
// let baseUrl = 'http://www.tokenex.world/api/v1';

// if (process.env.NODE_ENV === 'development') {
    // let baseUrl = 'http://test.tokenex.center/api/v1';
    var userName = 'xxd', userEmail = 'afadf';
   let baseUrl = 'http://test.tokenex.center/api/v1/users/register?name='+userName+'&email='+userEmail;
// }
var instance = axios.create({
  baseURL: baseUrl, //请求的路径
  timeout: 120000,  //请求超时时间
  headers: {"Content-Type": 'application/x-www-form-urlencoded',}
});

let isLogout = false;
let logoutTimeout;

let Request = {
  GET:(data) =>{
    let params = {
      ...param,
      ...data
    };
    let paramData = params.data?('?data=' + encryptByDES(JSON.stringify(params.data)) ):"";
    return instance.get(`/${data.api}/${params.v}` + paramData).then(data=>{
      if (isLogout) {
        clearTimeout(logoutTimeout);
        logoutTimeout = setTimeout(()=>{
          isLogout = false;
        }, 1000);
        return data.data;
      }
      if (data.data.ret[0].split("::")[0]=="FAIL_SYS_SESSION_EXPIRED") {
        isLogout = true;
        message.error('亲,请登录一下哦');
        this.propr.history.push('/login');
        return data.data;
      }
      if (data.data.ret[0]=="1000::登录异常") {
        isLogout = true;
        message.error('亲,请登录一下哦');
        this.propr.history.push('/login');
        return data.data;
      }
      if (data.data.ret[0].split("::")[0]=="FAIL_SYS_SESSION_EXPIRED_LENGTH") {
        isLogout = true;
        message.error('亲,请登录一下哦');
        this.propr.history.push('/login');
        return data.data;
      }
      if ((data.data.retType == -1) && (data.data.ret[0].split("::")[0]!=="EXCEPTION_QY_MODULESFREEUSEEXPIRED_ERROR")) {
        message.error(data.data.ret[0].split('::')[1]);
      }
      return data.data;
    }).catch(error=>{
      if (error.message.indexOf('timeout')!=-1) {
        message.error('目前网速较慢,请稍后再试');
      }else {
        message.error('网络异常');
      }
      console.log(error);
      return error;
    });
  },
  POST:(data={}) =>{
    let user_token = getToken();
    let params = {
      ...param,
      ...data
    };
    if(params.data == undefined){
      params.data = {
        token: user_token
      };
    }else{
      params.data.token = user_token;
    }
    let postParam = params.data||"";
    return instance.post(`/${data.api}`, querystring.stringify(postParam)).then(data=>{
      console.log(data);
      return data.data;
    }).catch(error=>{
      console.log(error.response);
      if (error.message.indexOf('timeout') != -1) {
        message.error('目前网速较慢,请稍后再试');
      }else if(error.response.data.code == 403){
        if(window.location.hash != '#/tradcenter'){
          message.error('登录异常，请重新登录');
          hashHistory.push('/login');
          // hashHistory.goBack();
        }
      }else{
        message.error('网络异常');
      }
      return error;
    });

  }
};

export default Request;
