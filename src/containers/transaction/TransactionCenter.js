import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TransactionCenter.scss';
import {connect} from 'react-redux';
import Action from '../../action/action'
import { bindActionCreators } from 'redux';
import { Icon, Radio, Checkbox, Select, Slider } from 'antd';
import { getToken } from 'function';
import TVChartContainer from './chart';
const Option = Select.Option;
const RadioGroup = Radio.Group;


class TransactionCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: '',
      searchRadio: 1,
      onlyShow: false,
      floatNum: 8,
      useCET: false,
      isLogin: false,
    };
  }


  componentWillMount(){
    let token = getToken();
    if(JSON.stringify(token) == "{}"){
      this.setState({isLogin: false})
    }
    this.setState({isLogin: true});
  }

  componentWillReceiveProps(nextProps){
    console.log(11111);
  }

  componentDidMount(){

  }
  onChangeRadio(e){
    this.setState({searchRadio: e.target.value});
  }

  render() {
    let mark = {
      0:'',25:'',50:'',75:'',100:''
    }
    return (
      <div id="TransactionCenter">
        <div className="container">
          <div className="left_container">
            <div className="left_top">
              <div className="search_box">
                <div className="search_input">
                  <input />
                  <Icon type="search" />
                </div>
                <div className="option_wrap">
                  <div className="option">
                    <RadioGroup onChange={(v)=>this.onChangeRadio(v)} value={this.state.searchRadio}>
                      <Radio value={1} size="small">成交额</Radio>
                      <Radio value={2}>涨跌</Radio>
                    </RadioGroup>
                  </div>
                  <Checkbox onChange={(e)=>{this.setState({onlyShow: e.target.checked})}}>只展示</Checkbox>
                </div>
              </div>
              <div className="tab_container">
                <div className="tab_header">
                  <div className="tab_item active">BCH</div>
                  <div className="tab_item">BTC</div>
                  <div className="tab_item">ETH</div>
                  <div className="tab_item">USDT</div>
                </div>
                <div className="tab_title">
                  <div className="tab_title_item">币种</div>
                  <div className="tab_title_item">最新价</div>
                  <div className="tab_title_item">成交额</div>
                </div>
                <div className="tab_content">
                  {
                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item, index) => {
                      return (
                        <div className="tab_content_item" key={index}>
                          <div className="tab_coin_item">
                            {/* <Icon type="star-o" /> */}
                            BTC
                          </div>
                          <div className="tab_coin_price">0.12345678</div>
                          <div className="tab_coin_number">155709.5455</div>
                        </div>
                      )
                    })
                  }

                </div>
              </div>
            </div>
            <div className="split"></div>
            <div className="left_down">
              <div className="left_down_title">
                <span className="divider"></span>
                最近成交
              </div>
              <div className="left_down_tab">
                <div className="tab_item active">市场</div>
                <div className="tab_item">我的</div>
              </div>
              <div className="left_down_th">
                <div className="down_title_item">时间</div>
                <div className="down_title_item">价格(BTC)</div>
                <div className="down_title_item">成交量(CET)</div>
              </div>
              {
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item, index) => {
                  return (
                    <div className="left_down_item" key={index}>
                      <div className="tr_time">22:51:36</div>
                      <div className="tr_price">0.00015464</div>
                      <div className="tr_number">5000.0000</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="right_container">
            <div className="coin_header">
              <div className="coin_details">
                <span className="divider"></span>
                {/* <Icon type="star" /> */}
                <span className="coin_name">BBN/BCH</span>
                <span className="coin_price">6308.97</span>
                <span className="coin_info">≈0.00004488 CNY</span>
              </div>
              <div className="ticker_section">
                <div className="item">
                  <div className="title">24H涨跌幅</div>
                  <div className="describe upOrDown">+5.14%</div>
                </div>
                <div className="item">
                  <div className="title">24H最高</div>
                  <div className="describe">0.00004564 BCH</div>
                </div>
                <div className="item">
                  <div className="title">24H最低</div>
                  <div className="describe">0.00004564 BCH</div>
                </div>
                <div className="item">
                  <div className="title">24H成交量/成交额</div>
                  <div className="describe">3,964,263.639  BBN / 175.371093  BCH</div>
                </div>
              </div>
              <Icon type="bulb"/>
            </div>
            <div className="right_center">
              <div className="chart_content">
                <div className="chart" id="chart_view">
                  <TVChartContainer />
                </div>
                <div className="login_box">
                  <div className="header">
                    <div>
                      <div className="item active">限价</div>
                      <div className="item">市价</div>
                    </div>
                    <div>
                      <Checkbox onChange={(e)=>{this.setState({useCET: e.target.checked})}}>使用CET抵扣手续费（50%优惠）</Checkbox>
                      <span>Taker费率：0.1%</span>
                      <span>Maker费率：0.1%</span>
                    </div>
                  </div>
                  <div className="deal_content">
                    <div className="only_sell">
                      <div className="sell_add">
                        <span className="sell_balance">ETH可用:0.00000000</span>
                        <span className="sell_add_btn">充值></span>
                      </div>
                      <div className="sell_input">
                        <div className="label">买价</div>
                        <input className="sell_price" placeholder="0.00105944"/>
                        <div className="sell_coin">ETH</div>
                      </div>
                      <p className="sell_about">≈4.91 CNY</p>
                      <div className="sell_input">
                        <div className="label">数量</div>
                        <input className="sell_price" placeholder="请输入数量"/>
                        <div className="sell_coin">BIX</div>
                      </div>
                      <Slider marks={mark} defaultValue={50}/>
                      <div className="sell_money">
                        <span className="lable">金额</span>
                        <span className="sell_money_num">0.00105944 ETH</span>
                      </div>
                      <div className="handle_sell">限价买入</div>
                    </div>
                    <div className="only_buy">
                      <div className="sell_add">
                        <span className="sell_balance">ETH可用:0.00000000</span>
                        <span className="sell_add_btn">充值></span>
                      </div>
                      <div className="sell_input">
                        <div className="label">卖价</div>
                        <input className="sell_price" placeholder="0.00105944"/>
                        <div className="sell_coin">ETH</div>
                      </div>
                      <p className="sell_about">≈4.91 CNY</p>
                      <div className="sell_input">
                        <div className="label">数量</div>
                        <input className="sell_price" placeholder="请输入数量"/>
                        <div className="sell_coin">BIX</div>
                      </div>
                      <Slider marks={mark} defaultValue={50}/>
                      <div className="sell_money">
                        <span className="lable">金额</span>
                        <span className="sell_money_num">0.00105944 ETH</span>
                      </div>
                      <div className="handle_out">限价卖出</div>
                    </div>
                  </div>

                  {
                    !this.state.isLogin &&
                    <div className="login_tips">
                      请先<span className="login_btn" onClick={()=>this.props.history.push('/login')}>登录</span>/<span className="register_btn" onClick={()=>this.props.history.push('/register')}>注册</span>
                    </div>
                  }

                </div>
              </div>
              <div className="right_content">
                <div className="header">
                  <div className="deep_come">
                    <span className="divider"></span>
                    合并深度：
                  </div>
                  <Select defaultValue="8位小数" style={{ width: 120 }} onChange={(value)=>{this.setState({floatNum: value})}}>
                    {
                      [1,2,3,4,5,6,7,8].map((item, index) => {
                        return (
                          <Option value={item} key={index}>{item}位小数</Option>
                        )
                      })
                    }
                  </Select>
                </div>
                <div className="table_th">
                  <div className="th1">价格(BCH)</div>
                  <div className="th2">数量CET</div>
                  <div className="th3">累计(CET)</div>
                </div>
                {
                  [1,1,1,1,1,1,1].map((item, index) => {
                    return (
                      <div className="table_content" key={index}>
                        <div className="content1">0.12345678</div>
                        <div className="content2">1234.5678</div>
                        <div className="content3">12345.678</div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="curr_list entrust">
              <div className="header">
                <div className="header_left">
                  <span className="divider"></span>
                  当前委托
                  <span className="repeal">全部撤销</span>
                </div>
                <div className="header_right">查看全部>></div>
              </div>
              <div className="table_th">
                <div className="th1">委托时间</div>
                <div className="th2">方向</div>
                <div className="th3">委托价格(BCH)</div>
                <div className="th4">委托数量(CET)</div>
                <div className="th5">尚未成交(CET)</div>
                <div className="th6">已成交(CET)</div>
                <div className="th7">成交均价(BCH)</div>
                <div className="th8">操作</div>
              </div>
              <div className="empty_table">
                <img className="empty_img" src={require('../../static/img/account/empty_img.png')}/>
                <p>无内容</p>
              </div>
            </div>
            <div className="history_list entrust">
              <div className="header">
                <div className="header_left">
                  <span className="divider"></span>
                  历史委托
                </div>
                <div className="header_right">查看全部>></div>
              </div>
              <div className="table_th">
                <div className="th1">委托时间</div>
                <div className="th2">方向</div>
                <div className="th3">委托价格(BCH)</div>
                <div className="th4">委托数量(CET)</div>
                <div className="th5">尚未成交(CET)</div>
                <div className="th6">已成交(CET)</div>
                <div className="th7">成交均价(BCH)</div>
                <div className="th8">操作</div>
              </div>
              <div className="empty_table">
                <img className="empty_img" src={require('../../static/img/account/empty_img.png')}/>
                <p>无内容</p>
              </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(TransactionCenter)
