import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import './MyEntrust.scss';
import { Icon } from 'antd';


class MyEntrust extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinTypeIndex: 0,
    };
  }

  render() {
    let coinType = [
      {name: 'KNC/BTC'}, {name: 'KNC/BTC'}, {name: 'KNC/BTC'}, {name: 'KNC/BTC'}, {name: 'KNC/BTC'},{name: 'KNC/BTC'}
    ]
    return (
      <div id="MyEntrust">
        <div className="entrust_container">
          <div className="myNews_header">
            <span className="divider"></span>
            我的委托
          </div>
          <div className="coin_type">
            {
              coinType.map((item, index) => {
                return (
                  <div className={this.state.coinTypeIndex === index ? "coin_item active" : "coin_item"} key={index} onClick={() => {
                    this.setState({coinTypeIndex: index})
                  }}>
                    {item.name}
                  </div>
                )
              })
            }
          </div>
          <div className="curr_entrust_title">
            <span className="divider"></span>
            当前委托
          </div>
          <div className="curr_table_content">
            <div className="table_header">
              <div className="table_tiem">委托时间</div>
              <div className="table_type">类型</div>
              <div className="table_price">委托价格</div>
              <div className="table_number">委托数量</div>
              <div className="table_residue">剩余数量</div>
              <div className="table_handle">操作</div>
            </div>
            <div className="curr_entrust_table_content">
              <img className="empty_img" src={require('../../static/img/account/empty_img.png')}/>
              <div>无内容</div>
            </div>
          </div>

          <div className="curr_entrust_title">
            <span className="divider"></span>
            历史委托
          </div>
          <div className="curr_table_content">
            <div className="table_header">
              <div className="history_table_tiem">委托时间</div>
              <div className="history_table_type">类型</div>
              <div className="history_table_price">委托价格</div>
              <div className="history_table_avg">平均成交价</div>
              <div className="history_table_number">委托数量</div>
              <div className="history_table_deal">交易数量</div>
              <div className="history_table_total">成交额</div>
              <div className="history_table_status">状态</div>
            </div>
            <div className="curr_entrust_table_content">
              <img className="empty_img" src={require('../../static/img/account/empty_img.png')}/>
              <div>无内容</div>
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

export default MyEntrust
