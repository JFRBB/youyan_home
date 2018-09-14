import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import './BasicInfo.scss';
import { getToken } from 'function';
import API from 'api';
import { Spin } from 'antd';

class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      nickName: '',
      phone: '',
      result: false,
      emailStatus: 0,
    };
  }

  componentWillMount(){
    let token = getToken();
    API.profile().then(res => {
      this.setState({result: true})
      if(res.code == 1){
        this.setState({
          email: res.result.user.email,
          nickName: res.result.user.name,
          phone: res.result.user.mobile,
          emailStatus: res.result.user.email_status
        })
      }
    })
  }

  render() {
    return (
      <div id="BasicInfo">
        <div className="basic_info_content">
          <div className="basic_info_header">
            <span className="divider"></span>
            基本信息
          </div>
          {
            this.state.result ?
            <div className="basic_info">
              <div className="basic_info_item">
                <div className="label">邮箱</div>
                <div className="basic_text">{this.state.email||''}<span style={this.state.emailStatus == 1?{color:'#4ba155'}:{color:' #1890FF'}}>{this.state.emailStatus == 1?"(已验证)":"(未验证)"}</span></div>
              </div>
              <div className="basic_info_item">
                <div className="label">用户名</div>
                <div className="basic_text">{this.state.nickName||''}</div>
              </div>
              <div className="basic_info_item">
                <div className="label">手机号</div>
                <div className="basic_text" style={!this.state.phone ? {color: '#1890FF'}:{}}>{this.state.phone||'尚未绑定'}</div>
              </div>
            </div>
            :
            <Spin />
          }

        </div>
        <div className="safe_setting">
          <div className="basic_info_header">
            <span className="divider"></span>
            安全设置
          </div>
          <div className="safe_set_item">
            <div className="item_name">登录密码</div>
            <div className="item_status">设置完成</div>
            <div className="item_text">登录账户时需要使用的密码</div>
            <div className="item_handle">修改</div>
          </div>
          <div className="safe_set_item">
            <div className="item_name">安全密码</div>
            <div className="item_status">未设置</div>
            <div className="item_text">在账户资金变动，修改账户信息时需要输入的密码</div>
            <div className="item_handle">设定</div>
          </div>
        </div>
        <div className="visit_history">
          <div className="basic_info_header basic_header">
            <span className="divider"></span>
            最近登录历史记录（只记录最近50条）
          </div>
          <div className="visit_history_content">
            <div className="history_header">
              <div className="table_time">时间</div>
              <div className="table_ip">IP</div>
              <div className="table_site">地理位置</div>
            </div>
            {
              [1,1,1,1,1,1,1,1].map((item, index) => {
                return (
                  <div className="history_item" key={index}>
                    <div className="history_time">2018-07-21 17:18:23</div>
                    <div className="history_ip">47.89.244.119</div>
                    <div className="history_site">United States San Mateo</div>
                  </div>
                )
              })
            }

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

export default BasicInfo
