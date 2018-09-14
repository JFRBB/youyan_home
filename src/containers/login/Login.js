import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import './Login.scss';
import {connect} from 'react-redux';
import Action from '../../action/action'
import { bindActionCreators } from 'redux';
import API from '../../api/index';
import { message, Spin, Icon } from 'antd';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      passWord: "",
      contentHeight: 500,
      loading: false,
    };
  }

  componentWillMount(){
    this.setState({contentHeight: window.innerHeight-60})
  }

  //判断是否已输入正确规则的账号和密码
  checkInfo(){
    if(this.state.account.length > 7 && this.state.passWord.length > 7){
      return true;
    }
    return false;
  }

  handleLogin(){
    if(this.state.account == '' || this.state.passWord == ''){
      return;
    }
    let params = {
      name: this.state.account,
      password: this.state.passWord
    }
    message.config({top:180});
    this.setState({loading: true})
    API.login(params).then(res => {
      console.log(res);
      if(res.code == 1){
        localStorage.setItem("user_token", res.result.token);
        this.setState({loading: false})
        message.success('登录成功');
        this.props.history.push('/achome/account');
      }else{
        this.setState({loading: false})
        message.error(res.result);
      }
    })
  }

  render() {
    return (
      <div id="Login">
        <div className="container" style={{height: this.state.contentHeight+'px'}}>
          <div className="login_content">
            <div className="content">
              <div className="login_title">登录TokenEx</div>
              <input
                value={this.state.account}
                placeholder="邮箱/手机号"
                onChange={(e)=>{this.setState({account: e.target.value})}}
              />
              <input
                value={this.state.passWord}
                placeholder="密码"
                type="password"
                onChange={(e)=>{this.setState({passWord: e.target.value})}}
                onKeyDown={(event)=>{
                  if (event.keyCode == "13") {
                      this.handleLogin();
                  }
                }}
              />
              <div className={this.checkInfo()?"login_btn active":"login_btn"} onClick={()=>this.handleLogin()}>{this.state.loading && <Icon type="loading" spin />}<span>登录</span></div>
            </div>
            <div className="login_help">
              <div className="forget_word"><Link to="/forgetCode">忘记密码？</Link></div>
              <div className="register">还没有账号？<Link to={{pathname:'/register'}}>注册</Link></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
  }
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
