import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import './Account.scss';
import { Button, Select } from 'antd';
import API from 'api';
const Option = Select.Option;

class AddMoney extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount(){

  }

  render() {
    return (
      <div className="right_container">
        <div className="right_title">
          <span className="divider"></span>
          BTC 充值
        </div>
        {/* <div className="add_money_content">
          未完成 KYC 审核前,不允许进行任何交易
        </div> */}
        <div className="out_container">
          <div className="out_header">
            <Select defaultValue="btc" style={{ width: 120 }} onChange={(e,v)=>{console.log(e);console.log(v);}}>
              <Option value="btc">BTC</Option>
              <Option value="atc">ATC</Option>
              <Option value="ctc" disabled>ATC</Option>
              <Option value="dtc">DTC</Option>
            </Select>
            <div className="new_price">
              最新价：<span>$7312.10</span><span>$48562.85</span>
            </div>
            <div className="can_price">可用：0.00000000</div>
            <div className="ice_price">冻结：0.00000000</div>
          </div>
          <div className="out_content">
            <div className="out_item">
              <div className="out_label tips_title">充值说明:</div>
              <div className="out_row tips_txt">
                <div>禁止向BTC地址充值除BTC之外的资产，任何充入BTC地址的非BTC资产将不可找回。</div>
                <div>虚拟币转账在网络确认数达到0个确认后自动入账。</div>
              </div>
            </div>
            <div className="out_item">
              <div className="out_address_title">
                <div className="copy_text">
                  <div className="out_label">地址:</div>
                  <div className="out_row">
                    1kjsdfdetdsfdsfdfd
                    <span className="handle_site">复制</span>
                  </div>
                </div>

                <div className="QR_code">
                  我是二维码
                </div>
              </div>

            </div>
            <div className="out_item">
              <div className="out_label"></div>
              <div className="out_row">
                <div className="handle_out">转出</div>
              </div>
            </div>

          </div>
        </div>

        <div className="out_history_title">
          <span className="divider"></span>
          BTC充值记录
        </div>
        <div className="out_history_header">
          <div className="history_time">时间</div>
          <div className="history_site">转出到</div>
          <div className="history_number">数量(BTC)</div>
          <div className="history_server">手续费(BTC)</div>
          <div className="history_status">状态</div>
        </div>
        <div className="out_history_content">
          <img className="empty_img" src={require('../../static/img/account/empty_img.png')}/>
          <p>无内容</p>
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

export default AddMoney
