import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import './Account.scss';
import { Icon, Modal, Button, Select } from 'antd';
const Option = Select.Option;

class MoneyManage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="right_container">
        <div className="right_title">
          <span className="divider"></span>
          <span>钱包管理</span>
        </div>
        <div className="money_manage_content">
          <div className="money_manage_header">
            <Select defaultValue="btc" style={{ width: 120, fontSize: '12px' }} onChange={(e,v)=>{console.log(e);console.log(v);}}>
              <Option value="btc">BTC</Option>
              <Option value="atc">ATC</Option>
              <Option value="ctc" disabled>ATC</Option>
              <Option value="dtc">DTC</Option>
            </Select>
            <span className="money_manage_tips">每个币种最多可以添加5个地址</span>
          </div>
          <div className="money_manage_item">
            <div className="money_manage_label">标签</div>
            <input type="text" className="money_mark" placeholder="请输入标签"/>
          </div>
          <div className="money_manage_item">
            <div className="money_manage_label">地址</div>
            <div>
              <input type="text" className="money_site" placeholder="请输入地址"/>
              <p className="money_site_tips">请确定地址正确性！数字货币不同于传统货币，一旦转出，无法找回！</p>
            </div>
          </div>
          <div className="add_money_site">添加地址</div>
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

export default MoneyManage
