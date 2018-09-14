import validator from 'validator';
import moment from 'moment';

export const validate = {
  // 判断是否为空
  isEmpty:(v)=>{
    v = (v||"");
    v = v + '';
    v = v.replace(/\s+/g,"");
    if (v === '') return true;
  },
  // 是否包含中文
  isContainChinese:(v)=>{
    v = (v||"");
    v = v + '';
    if (/.*[\u4e00-\u9fa5]+.*$/.test(v)) {
      return true;
    }
  },
  // 判断是否是手机号
  isPhone:(v)=>{
    v = v||"";
    if (!validator.isNumeric(v)) {
      return false;
    }

    if ((v.length !== 11) || (Number(v[0]) !== 1)) {
      return false;
    }
    return true;
  },
  // 判断日期格式是否正确 格式YYYY-MM-DD
  isDate:(v)=>{
    v = v||"";
    if (!/^(\d{4})-(\d{2})-(\d{2})$/.test(v)) {
      return false;
    }
    let result = moment(v).format('x');
    if (result == 'Invalid date') {
      return false;
    }
    return true;
  },
  // 判断是否大于字数限制
  isOver:(v, number)=>{
    v = v||"";
    v = v + '';
    v = v.replace(/\s+/g,"");
    if (v.length > number) {
      return true;
    }
  },
  // 判断是否是email
  isEmail:(v)=>{
    v = v||"";
    if (validator.isEmail(v)) return true;
  },
  //验证密码是否符合要求 字母+数字 6-18位
  isPassWord: (v) => {
    v = v||"";
    if((/^[a-zA-Z0-9]{6,18}$/.test( v ))){
      return true;
    }
    return false;
  }
}
