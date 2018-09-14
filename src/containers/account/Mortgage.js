import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import './Mortgage.scss';
import { Icon } from 'antd';
import API from 'api';

class Mortgage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount(){

  }

  getLang(name){
    let account = this.props.lanData.account;
    return account[name][this.props.language];
  }

  render() {
    return (
      <div id="Mortgage">
        <div className="Mortgage">
          <div>
            <span className="asset-total-item"><span className="divider"></span>资产抵押</span>
          </div>
        </div>
        <div className="table_content">
          <div className="mor_table_head">
            <div className="th_item1"></div>
            <div className="th_item2">锚定资产</div>
            <div className="th_item3">借出数量</div>
            <div className="th_item4">抵押均价</div>
            <div className="th_item5">可用</div>
            <div className="th_item6">可赎回</div>
            <div className="th_item7"></div>
          </div>
          <div className="tb_content">
            {
              [1,2].map((item, index) =>{
                return (
                  <div className="mor_table_tb" key={index}>
                    <div className="th_item1">BTC</div>
                    <div className="th_item2">TKusd</div>
                    <div className="th_item3">160000</div>
                    <div className="th_item4">4700 USD</div>
                    <div className="th_item5">5000</div>
                    <div className="th_item6">0.9 BTC</div>
                    <div className="th_item7"><span>调整债仓</span></div>
                  </div>
                )
              })
            }
          </div>
          <div className="tb_content">
            {
              [1,2].map((item, index) =>{
                return (
                  <div className="mor_table_tb" key={index}>
                    <div className="th_item1">ETH</div>
                    <div className="th_item2">TKusd</div>
                    <div className="th_item3">160000</div>
                    <div className="th_item4">4700 USD</div>
                    <div className="th_item5">5000</div>
                    <div className="th_item6">0.9 BTC</div>
                    <div className="th_item7"><span>调整债仓</span></div>
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
    language: state.mainReducer.language,
    lanData: state.mainReducer.lanData
  }
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Mortgage))
