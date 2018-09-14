import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import './Register.scss';
import API from '../../api/index';
import { validate } from '../../common/validate';
import { message, Spin, Icon } from 'antd';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentHeight: 500,
      email: '',
      account: '',
      inviteCode: '',
      passWord: '',
      checkWord: '',
      errEmail: '',
      errAccount: '',
      errInviteCode: '',
      errWord: '',
      errCheckWord: '',
      loading: false,
    };
  }

  componentWillMount(){
    this.setState({contentHeight: window.innerHeight-60});
  }

  checkEmail(e){
    if(!validate.isEmail(e.target.value) && e.target.value != ''){
      this.setState({errEmail: '邮箱格式错误，请重新输入'})
      return;
    }
    if(!validate.isEmail(e.target.value)){
      this.setState({errEmail: '邮箱格式错误，请重新输入'});
      return;
    }
    this.setState({errEmail: 'success'});
  }

  checkAccount(e){
    if(e.target.value == ""){
      this.setState({errAccount: '用户名不可为空'});
      return;
    }
    if(e.target.value.length < 5){
      this.setState({errAccount: '至少5位字符'});
      return;
    }
    this.setState({errAccount: 'success'});
  }

  checkPassWord1(){
    if(this.state.passWord != ''){
      if(this.state.passWord.length < 8){
        this.setState({ errWord: '至少8位字符' });
        return;
      }
    }
    if(this.state.passWord == ''){
      this.setState({ errWord: '密码不可为空' });
      return;
    }
    this.setState({ errWord: 'success' });
  }

  checkPassWord2(){
    if(this.state.passWord != ''){
      if(this.state.passWord != this.state.checkWord){
        this.setState({ errCheckWord: '两次密码不一致' });
        return;
      }
    }
    this.setState({ errCheckWord: 'success' })
  }

  checkinviteCode(e){
    if(e.target.value == ''){
      this.setState({errInviteCode: '邀请码不可为空'});
      return;
    }
    this.setState({errInviteCode: 'success'});
  }

  handleRegister(){
    if(this.state.errEmail != 'success' || this.state.errAccount != 'success' || this.state.errInviteCode != 'success' || this.state.errWord != 'success' || this.state.errCheckWord != 'success'){
      console.log('邮箱：'+this.state.errEmail);
      console.log('账户：'+this.state.errAccount);
      console.log('邀请码：'+this.state.errInviteCode);
      console.log('密码：'+this.state.errWord);
      console.log('确认密码：'+this.state.errCheckWord);
      message.config({top:180});
      message.warning('请先完善页面数据');
      return;
    }
    let params = {
      name: this.state.account,
      email: this.state.email,
      password: this.state.passWord,
      invite_code: this.state.inviteCode
    }
    this.setState({loading: true});

    API.register(params).then(res => {
      this.setState({loading: false});
      if(res.code == 1){
        localStorage.setItem("user_token", res.result.token);
        message.success('注册成功');
        this.props.history.push("/account");
      }else{
        if(res.status == "form_error"){
          let error = res.result.errors;
          this.setState({
            errEmail: error.email||'success',
            errAccount: error.name||'success',
            errInviteCode: error.invite_code||'success'
          })
        }
      }
    })
  }

  render() {
    return (
      <div id="Register">
        <div className="container" style={{height: this.state.contentHeight+'px'}}>
          <div className="register_content">
            <div className="register_title">注册TokenEx</div>
            <div className="code_row">
              <div className="input_row">
                <div className="label">用户名：</div>
                <input
                  value={this.state.account}
                  type="text"
                  maxLength={50}
                  placeholder="至少5个字符"
                  onBlur={(e)=>{this.checkAccount(e)}}
                  onChange={(e)=>{
                    this.setState({account: (e.target.value).replace(/[^\a-\z\A-\Z0-9]/g,'')})
                  }}
                />
              </div>
              <div className="err_tips">
                {this.state.errAccount == 'success' ? '' : this.state.errAccount}
              </div>
            </div>
            <div className="code_row">
              <div className="input_row">
                <div className="label">邮箱：</div>
                <input
                  value={this.state.email}
                  placeholder="请输入邮箱"
                  type="email"
                  onBlur={(e)=>{this.checkEmail(e)}}
                  onChange={(e)=>{this.setState({email: e.target.value})}}
                />
              </div>
              <div className="err_tips">
                {this.state.errEmail == 'success' ? '' : this.state.errEmail}
              </div>
            </div>

            <div className="code_row">
              <div className="input_row">
                <div className="label">密码：</div>
                <input
                  value={this.state.passWord}
                  placeholder="至少8个字符"
                  type="password"
                  onBlur={()=>this.checkPassWord1()}
                  onChange={(e)=>{this.setState({passWord: e.target.value})}}
                />
              </div>
              <div className="err_tips">
                {this.state.errWord == 'success' ? '' : this.state.errWord}
              </div>
            </div>
            <div className="code_row">
              <div className="input_row">
                <div className="label">确认密码：</div>
                <input
                  value={this.state.checkWord}
                  type="password"
                  placeholder="请确认密码"
                  onBlur={()=>this.checkPassWord2()}
                  onChange={(e)=>{this.setState({checkWord: e.target.value})}}
                  onKeyDown={(event)=>{
                    if (event.keyCode == "13") {
                        this.handleRegister();
                    }
                  }}
                />
              </div>
              <div className="err_tips">
                {this.state.errCheckWord == 'success' ? '' : this.state.errCheckWord}
              </div>
            </div>
            <div className="code_row">
              <div className="input_row">
                <div className="label">邀请码：</div>
                <input
                  value={this.state.inviteCode}
                  placeholder="请输入邀请码"
                  onBlur={(e)=>this.checkinviteCode(e)}
                  onChange={(e)=>{this.setState({inviteCode: e.target.value.replace(/[^\a-\z\A-\Z0-9]/g,'')})}}
                />
              </div>
              <div className="err_tips">
                {this.state.errInviteCode == 'success' ? '' : this.state.errInviteCode}
              </div>
            </div>
            <div className="register_btn"
              onClick={()=>{
                this.handleRegister();
              }}

            >{this.state.loading && <Icon type="loading" spin />}<span>注册</span></div>
            <div className="register_tips">已经注册？<Link to="/login">登录</Link></div>
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

export default Register
