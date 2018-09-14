import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import './Account.scss';
import { Icon } from 'antd';
import API from 'api';

class AssetManage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount(){
    // API.coins().then(res => {
    //   console.log(res);
    //   if(res.code == 1){
    //
    //   }
    // })
  }

  getLang(name){
    let account = this.props.lanData.account;
    return account[name][this.props.language];
  }

  render() {
    return (
      <div>
        <div className="asset_total">
          <div>
            <span className="asset-total-item"><span className="divider"></span>{this.getLang('total')}:  0.000000 BTC </span>
          </div>
          <div className="guess_type">
            <span>{this.getLang('probably')}：</span>
            <div className="guess_item active">USD</div>
            <div className="guess_item">CNY</div>
            <div className="guess_item">BTC</div>
          </div>
        </div>
        <div className="table_content">
          <div className="asset_header">
            <div className="asset-head-item1">
              {this.getLang('type')}&nbsp;&nbsp;&nbsp;
              <input id="isHideZero" type="checkbox" className="input"/>
              <label htmlFor="isHideZero">{this.getLang('hide')}</label>
            </div>
            <div className="asset-head-item2">{this.getLang('can')}</div>
            <div className="asset-head-item3">{this.getLang('ice')}</div>
            <div className="asset-head-item4">{this.getLang('ae')}</div>
            <div className="asset-head-item5">
                <input  className="asset_search"/>
                <Icon type="search" />
            </div>
          </div>
          <div className="asset_body">
            {
              [1,1,1,1].map((item, index) => {
                return (
                  <div className="coin_item" key={index}>
                    <div className="coin_icon">
                      <span>BTC</span>
                    </div>
                    <div className="can_money">
                      <span>0</span>.000000
                    </div>
                    <div className="ice_money">
                      <span>0</span>.000000
                    </div>
                    <div className="total_money">
                      <span>0</span>.00000/BTC
                    </div>
                    <div className="handle_money">
                      <div className="add_money">{this.getLang('add_btn')}</div>
                      <div>{this.getLang('out_btn')}</div>
                      <div>{this.getLang('mortagage_btn')}</div>
                      <div>{this.getLang('deal_btn')}</div>
                    </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AssetManage))
