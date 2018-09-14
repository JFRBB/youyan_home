import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Account.scss';
import {connect} from 'react-redux';
import Action from '../../action/action'
import { bindActionCreators } from 'redux';
import { Modal } from 'antd';
import API from '../../api/index';


class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSet: false,
    };
  }


  componentWillMount(){
    // API.myWallet().then(res => {
    //   console.log(res);
    //   if(res.code == 1){
    //   }
    // })
  }

  getCurrLocation(url){
    if(this.props.location.pathname.indexOf(url) > -1){
      return true;
    }
    return false;
  }

  getLanguage(name){
    let account = this.props.lanData.account;
    return account[name][this.props.language];
  }

  render() {
    let tabArr = [
      {
        name: this.getLanguage('asset'),
        index: 0,
        href: '/achome/account',
        icon: require('../../static/img/account/account.png'),
        iconed: require('../../static/img/account/accounted.png'),
        child:[
          {name: this.getLanguage('add'), childIndex: 0, href: '/achome/deposit'},
          {name: this.getLanguage('out'), childIndex: 1, href: '/achome/withdraw'},
          {name: this.getLanguage('mortgage'), childIndex: 2, href: '/achome/mortgage'}
        ]
      },
      {name: this.getLanguage('order'), index: 1, href: '/achome/myorder',icon: require('../../static/img/account/myorder.png'), iconed: require('../../static/img/account/myordered.png')},
      {name: this.getLanguage('money'), index: 2, href: '/achome/wallet',icon: require('../../static/img/account/wallet.png'), iconed: require('../../static/img/account/walleted.png')},
      {name: this.getLanguage('base'), index: 3, href: '/achome/basic',icon: require('../../static/img/account/basic.png'), iconed: require('../../static/img/account/basiced.png')},
      {name: this.getLanguage('kyc'), index: 4, href: '/achome/certification',icon: require('../../static/img/account/certification.png'), iconed: require('../../static/img/account/certificationed.png')},
      {name: this.getLanguage('message'), index: 5, href: '/achome/message',icon: require('../../static/img/account/message.png'), iconed: require('../../static/img/account/messageed.png')}
    ]
    return (
      <div id="Account">
        <div className="container">
          <div className="left_content">
            {
              tabArr.map((item, index) => {
                return (
                  <div key={index}>
                    <div className={this.getCurrLocation(item.href)? "person_item active" : "person_item"} onClick={() => {
                      this.props.history.push(item.href)
                    }}>
                      <img className="icon_img" src={this.getCurrLocation(item.href)?item.iconed:item.icon}/>
                      {item.name}
                    </div>
                    {
                      item.child ?
                      item.child.map((childItem, childIndex) => {
                        return (
                          <div key={childIndex} className={this.getCurrLocation(childItem.href) ? "child_item active" : "child_item"} onClick={() => {
                            this.props.history.push(childItem.href)
                          }}>{childItem.name}</div>
                        )
                      })
                      :
                      null
                    }
                  </div>
                )
              })
            }

          </div>
          <div className="right_content">
            {this.props.children}
            <Modal
              title="设定资金密码"
              maskClosable={false}
              visible={this.state.showSet}
              className="person_set_pwd"
              style={{marginTop: '200px'}}
              onOk={() => {this.setState({showSet: false})}}
              onCancel={() => {this.setState({showSet: false})}}
            >
              <div className="person_set_container">
                <div className="set_item">
                  <div className="set_label">新密码</div>
                  <input type="password" className="new_word" placeholder="请输入新密码"/>
                </div>
                <div className="set_item">
                  <div className="set_label">确认密码</div>
                  <input type="password" className="check_word" placeholder="请确认密码"/>
                </div>
                <div className="set_item">
                  <div className="set_label">验证码</div>
                  <div className="code_row">
                    <input type="text" className="set_code" placeholder="验证码"/>
                    <span className="set_send_code">发送验证码</span>
                  </div>
                </div>
              </div>

            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    language: state.mainReducer.language,
    lanData: state.mainReducer.lanData
  }
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Account))
