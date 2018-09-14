import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'antd';
import {connect} from 'react-redux';
import Action from '../../action/action'
import { bindActionCreators } from 'redux';
import './Home.scss';
import ButtonGroup from 'antd/lib/button/button-group';
import lanData from '../../common/config_lan';
import Websocket from '../../components/WebSocket';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftNum: 0,
      switchTab: 0,
    };
  }

  componentWillMount(){
    let windowWidth = window.innerWidth;
  }

  handleData(data) {
     let result = JSON.parse(data);
     console.log(result);
   }

  sendMessage(){
    let message = {
      cmd: "server.ping"
    }
    message = JSON.stringify(message)
    console.log('发送:'+message);
    this.refWebSocket.sendMessage(message);
  }

  render() {
    let home = this.props.lanData.home;
    return (
      <div id="Home">
        <div className="container">
          <div className="header">
            <div className="header_title">
              <img className="head_logo" src={require('../../static/img/logo.png')} onClick={()=>this.sendMessage()} alt=''/>
              <span className="head_web_name">TokenEX</span>
              <span className="head_web_tips">—— A Finance Tool Accelerating Building the Future ——</span>
            </div>

            <div className="header_dis">

              <div className="banner_item item1">
                <div className="banner_title">{home.title1[this.props.language]}</div>
                <div className="banner_text">Future Collaboration Infrastructure</div>
                <div className="right_icon"></div>
              </div>
              <div className="banner_item item2">
                <div className="banner_title">{home.title2[this.props.language]}</div>
                <div className="banner_text">Future Education / Health / Welfare</div>
                <div className="right_icon"></div>
              </div>
              <div className="banner_item item3">
                <div className="banner_title">{home.title3[this.props.language]}</div>
                <div className="banner_text">Explore the Nature of the World</div>
                <div className="right_icon"></div>
              </div>
              <div className="banner_item item4">
                <div className="banner_title">{home.title4[this.props.language]}</div>
                <div className="banner_text">Future Automated Industry</div>
                <div className="right_icon"></div>
              </div>

            </div>

            <div className="banner_message">
              Always Focus on Forefront of HUMAN development
            </div>
          </div>
          <div className="scroll_price"  id="scroll_price" style={{left: -this.state.leftNum+'px'}}>
            {
              [1,1,1,1,1,1,1,1].map((item, index) => {
                return (
                  <Button className="button" key={index}>
                    <div className="text_div">
                      <img src={require('../../static/img/eth_icon.png')} alt=''/>
                      <span>BT1/ETH</span>
                      <span>0.00%</span>
                      <span>0.0000000</span>
                    </div>
                  </Button>
                )
              })
            }
          </div>

          <div className="content">
            <div className="home_deal">
              <div className="deal_head">
                <div className="deal_switch">
                  <span className={this.state.switchTab == 0 ? "switch_item active" : "switch_item"} onClick={()=>{
                    this.setState({switchTab: 0})
                  }}>ETH市场</span>
                  <span className={this.state.switchTab == 1 ? "switch_item active" : "switch_item"} onClick={()=>{
                    this.setState({switchTab: 1})
                  }}>BTC市场</span>
                </div>
                <div className="deal_search">
                  <input type="text" />
                  <img src={require('../../static/img/home_search.png')} alt=''/>
                </div>
              </div>
              <div className="content_table">
                <div className="table_head">
                  <div className="th1">交易对</div>
                  <div className="th2">最新成交价</div>
                  <div className="th3">24h涨跌幅</div>
                  <div className="th4">24h涨跌幅</div>
                  <div className="th5">24h最低价</div>
                  <div className="th6">24h成交量</div>
                </div>
                {
                  [1,1,1].map((item, index) => {
                    return (
                      <div className="table_tr" key={index}>
                        <div className="th1"><span className="blod">EEC</span>/ETH</div>
                        <div className="th2">
                          <span className="blod">0.00049250</span>
                          <span className="doolar">$0.0</span>
                          <span className="rmb">￥0.0031</span>
                        </div>
                        <div className="th3"><span className="blod">+26.28%</span></div>
                        <div className="th4"><span className="blod">0.00049500 ETH</span></div>
                        <div className="th5"><span className="blod">0.00049500 ETH</span></div>
                        <div className="th6"><span className="blod">321712.36836999 EEC</span></div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>

          <div className="web_describe">
            <div className="describe_row">
              <div className="describe_item">
                <img className="describe_img" src={require('../../static/img/safe.png')}/>
                <div className="describe_right">
                  <div className="describe_title">资产安全</div>
                  <div className="describe_tips">专业的风险管控团队，提供全方位的安全策略。98%数字资产被存储在多重签名的冷钱包里。</div>
                </div>
              </div>
              <div className="describe_item">
                <img className="describe_img" src={require('../../static/img/safe.png')}/>
                <div className="describe_right">
                  <div className="describe_title">高效</div>
                  <div className="describe_tips">超级撮合引擎。百万级订单处理能力。</div>
                </div>
              </div>
            </div>
            <div className="describe_row">
              <div className="describe_item">
                <img className="describe_img" src={require('../../static/img/safe.png')}/>
                <div className="describe_right">
                  <div className="describe_title">便捷</div>
                  <div className="describe_tips">友好的交互界面。多语言的客户服务。</div>
                </div>
              </div>
              <div className="describe_item">
                <img className="describe_img" src={require('../../static/img/safe.png')}/>
                <div className="describe_right">
                  <div className="describe_title">专业</div>
                  <div className="describe_tips">专业的技术团队。防SQL注入，防XSS攻击，CRSF攻击。</div>
                </div>
              </div>
            </div>
          </div>

          <Websocket
            url='ws://test.tokenex.center:8888'
            onMessage={this.handleData.bind(this)}
            OnOpen={(data)=>{console.log(data);}}
            OnClose={(data)=>{console.log('error:'+data);}}
            debug={true}
            reconnect={true}
            ref = {Websocket => {
              this.refWebSocket = Websocket;
            }}
        />
        <div className="hidden">
          <img src={require('../../static/img/banner/banner1.png')}/>
          <img src={require('../../static/img/banner/banner2.png')}/>
          <img src={require('../../static/img/banner/banner3.png')}/>
          <img src={require('../../static/img/banner/banner4.png')}/>
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
    actions: bindActionCreators(Action, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Home))
