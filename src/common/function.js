import React, { PropTypes } from 'react';
import moment from 'moment';
import md5 from 'blueimp-md5';
import CryptoJS from 'crypto-js';



// 根据value来获取name [{name:"张三", value:"zhangsan"}]
export const getNameFromValue = (arr, value)=>{
  let name = '';
  arr.filter(v=>{
    if (v.value == value) {
      name = v.name
    }
  });
  return name;
}

// 数组是否有包含某个值
export const isArrayContainValue = (arr, value)=>{
  for (let i in arr) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

// 数组删除某个值
export const arrayDeleteValue = (arr, value)=>{
  for (let i in arr) {
    if (arr[i] === value) {
      arr.splice(i, 1);
      return arr;
    }
  }
  return arr;
}
//得到token
export const getToken = () => {
  if (localStorage.getItem('user_token') == 'undefined') {
    return {};
  }
  let data = localStorage.getItem('user_token');
  if (data == null) {
    return {};
  }
  return localStorage.getItem('user_token');
}

// 获取本地存储数据
export const getLocalStorage = (item) => {
  if (localStorage.getItem(item) == 'undefined') {
    this.props.history.push('/login');
    return {};
  }
  let data = JSON.parse(localStorage.getItem(item));
  if (data == null) {
    this.props.history.push('/login');
    return {};
  }
  return JSON.parse(localStorage.getItem(item));
}

//根据数组对象里的值排序
// var obj=[
//   {b: '3', c: 'c'},
//   {b: '1', c: 'a'},
//   {b: '2', c: 'b'}
// ];
// obj.sort(sortBy('b',false,parseInt));
export const sortBy = function (filed,rev,primer){
  rev = (rev) ? -1 : 1;
  return function (a, b) {
    a = a[filed];
    b = b[filed];
    if (typeof (primer) != 'undefined') {
      a = primer(a);
      b = primer(b);
    }
    if (a < b) { return rev * -1; }
    if (a > b) { return rev * 1; }
    return 1;
  }
};

// let key = 'NeRedIauHsiUzihSgnODuXnAiX';   //秘钥
let key = 'Sjel9k5X/gTa2&uL8Rn6qMFqH3Bcu7jZnV1m4Iep';



const mainKey = md5(key);   //二次加密秘钥
//加密字符串
export const encryptByDES = (message) => {
  let reKey = mainKey;
  var keyHex = CryptoJS.enc.Utf8.parse(reKey);
  var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encodeURIComponent(encrypted.toString());
 }
//解密
export const decryptByDES = (ciphertext) => {
  // ciphertext = decodeURIComponent(ciphertext);
  let reKey = mainKey;
  var keyHex = CryptoJS.enc.Utf8.parse(reKey);
  var decrypted = CryptoJS.DES.decrypt({
    ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
  }, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
 }

 /**
 * 设置cookie
 * @param {string} cname       cookie的名字
 * @param {string} cvalue   要存入的cookie
 * @param {number} exdays  过期时间（天）
 */
 export const setCookie = (cname, cvalue, exdays) => {
     var d = new Date();
     d.setTime(d.getTime() + (exdays*24*60*60*1000));
     var expires = "expires="+d.toUTCString();
     document.cookie = cname + "=" + encryptByDES(escape(cvalue)) + "; " + expires;
 }

 //获取cookie
 export const getCookie = (cname) => {
     var name = cname + "=";
     var ca = document.cookie.split(';');
     for(var i=0; i<ca.length; i++) {
         var c = ca[i];
         while (c.charAt(0)==' ') c = c.substring(1);
         if (c.indexOf(name) != -1){
           var cnameValue = unescape(c.substring(name.length, c.length));
           return decryptByDES(cnameValue);
         }
     }
     return "";
 }

 // 删除cookie
 export const delCookie = (cname) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(cname);
    if(cval!=null){
        document.cookie = cname + "=" + cval + ";expires=" + exp.toGMTString();
    }
}
