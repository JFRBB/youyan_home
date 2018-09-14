import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import './ForgetCode.scss';

class ForgetCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentHeight: 500,
    };
  }

  componentWillMount(){
    this.setState({contentHeight: window.innerHeight})
  }

  render() {
    return (
      <div id="ForgetCode">
        <div className="container" style={{height: this.state.contentHeight+'px'}}>
          <div className="forget_content">
            <div className="forget_title">重置密码</div>
            <input
              value={this.state.account}
              placeholder="手机号"
              onChange={(e)=>{this.setState({account: e.target.value})}}
            />
            <div className="code_row">
              <input
                value={this.state.passWord}
                placeholder="输入验证码"
                onChange={(e)=>{this.setState({passWord: e.target.value})}}
              />
              <span className="get_code">获取验证码</span>
            </div>
            <input
              value={this.state.passWord}
              placeholder="请输入密码"
              onChange={(e)=>{this.setState({passWord: e.target.value})}}
            />
            <input
              value={this.state.passWord}
              placeholder="请确认密码"
              onChange={(e)=>{this.setState({passWord: e.target.value})}}
            />
            <div className="forget_btn active">确认</div>
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

export default ForgetCode
