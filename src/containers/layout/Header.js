
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.scss';
import {connect} from 'react-redux';
import Action from '../../action/action'
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import { Select, Icon } from 'antd';
const Option = Select.Option;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currTab: this.props.currTab,
      showAccount: false, //hover用户中心
      tempTab: '',  //hover其他tab时，记录原本currTab
    };
  }

  static defaultProps = {
    color: '#fff', //背景颜色
    height: 60, //header高度
    isLogin: true,
  }

  componentWillMount(){
    // console.log(this.props);
    if(localStorage.getItem('user_token') == 'undefined' || localStorage.getItem('user_token') == null){
      this.setState({isLogin: false})
    }else{
      this.setState({isLogin: true})
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currTab != this.props.currTab){
      this.setState({currTab: nextProps.currTab})
    }
    this.checkLogin();
  }

  // 判断当前用户是否在线
  checkLogin(){
    if(localStorage.getItem('user_token') == 'undefined' || localStorage.getItem('user_token') == null){
      this.setState({isLogin: false})
    }else{
      this.setState({isLogin: true})
    }
  }

  changeLanguage(e){
    console.log(e);
  }

  showHover(showTab, thisTab){
    this.setState({
      [showTab]: true,
      tempTab: thisTab,
    })
  }

  hideHover(showTab){
    this.setState({
      [showTab]: false,
      tempTab: '',
    })
  }

  handleLogout(){
    localStorage.removeItem('user_token');
    if(this.state.currTab != "/"){
      if(this.state.currTab != "/tradcenter"){
        this.props.history.push({pathname:'/'});
      }
    }
    this.checkLogin();
  }


  render() {
    let header = this.props.lanData.header;
    let tabData = [
      {name: header.deal_center[this.props.language],link:'/tradcenter',childName:'superMarket',child:[
        {name: header.main[this.props.language], link: '/tradcenter'},
        {name: header.innovate[this.props.language], link: '/tradcenter'},
      ]},
      {name: header.shop[this.props.language], link: ''},
      {name: header.rank[this.props.language], link: ''},
      {name: header.financial[this.props.language],link:'/tradcenter2',childName:'moneyItem',child:[
        {name: header.tok[this.props.language], link: '/tradcenter'},
        {name: header.jetton[this.props.language], link: '/tradcenter'},
        {name: header.mine[this.props.language], link: '/tradcenter'},
        {name: header.lottery[this.props.language], link: '/tradcenter'},
      ]},
      {name: header.about[this.props.language], link: ''},
    ]
    return (
      <div id="Header" style={{background:this.props.color,height: this.props.height+'px'}}>
        <div className="container">

            <div>
              <Link className="header_logo" to={{pathname:'/'}}>
                <img src={require('../../static/img/logo.png')} alt=''/>
                <span className="web_name">TokenEX</span>
              </Link>
              {
                tabData.map((item, index) => {
                  return (
                    <div className="tab_item" key={index}
                      onMouseOver={()=>this.showHover(item.childName,'/tradcenter')}
                      onMouseOut={()=>this.hideHover(item.childName,'/tradcenter')}
                    >
                      <div
                        className="tab_content"
                        onClick={()=>this.props.history.push(item.link)}
                      >
                        <span className="tab_name">{item.name}</span>
                        <span
                          className={this.state.currTab === item.link?"show_line":'tab_line' }
                          ></span>
                      </div>
                      {
                        item.child &&
                        <div
                          className="tab_child"
                          style={{display: this.state[item.childName]?"block":"none"}}
                          onMouseOver={()=>this.showHover(item.childName,'/tradcenter')}
                          onMouseOut={()=>this.hideHover(item.childName,'/tradcenter')}
                        >
                          {
                            item.child.map((o, i) =>{
                              return (
                                <div
                                  key={i}
                                  className="child_tab"
                                  onClick={()=>this.props.history.push(o.link)}
                                >
                                  {o.name}
                                </div>
                              )
                            })
                          }
                        </div>
                      }
                    </div>
                  )
                })
              }
            </div>

            <div>
              <Link
                className="header_asset"
                to={{pathname:'/achome/account'}}
                style={{display: !this.state.isLogin?'none':''}}
              >
                <span>{header.asset[this.props.language]}</span>
                <span className="login_line"></span>
              </Link>
              <Link
                className="header_list"
                to={{pathname:'/achome/myorder'}}
                style={!this.state.isLogin?{display:'none'}:{}}
              >
                <span>{header.order[this.props.language]}</span>
                <span className="login_line"></span>
              </Link>
              <Link className={this.state.currTab == '/login'?"header_money1 active":"header_money1"} to={{pathname:'/login'}} style={this.state.isLogin ? {display: "none"}:{display: "block"}}>{header.login[this.props.language]}</Link>
              <Link className={this.state.currTab == '/register'?"header_money active":"header_money"} to={{pathname:'/register'}} style={this.state.isLogin ? {display: "none"}:{display: "block"}}>{header.register[this.props.language]}</Link>
              <div className="account_content" style={this.state.isLogin ? {display: "block"}:{display: "none"}}>
                <div className="icon_div" onMouseMove={()=>this.showHover("showAccount")} onMouseOut={()=>this.hideHover("showAccount")}>
                  <Icon type="user"/>
                </div>
                <div
                  className="person_item"
                  style={{display: this.state.showAccount?"block":"none"}}
                  onMouseMove={()=>this.showHover("showAccount")}
                  onMouseOut={()=>this.hideHover("showAccount")}
                >
                  <div className="header_user" onClick={()=>{this.props.history.push({pathname:"/achome/account"})}}>{header.account[this.props.language]}</div>
                  <div>{header.total[this.props.language]}：3BTC</div>
                  <div onClick={()=>this.handleLogout()}>{header.logout[this.props.language]}</div>
                </div>
            </div>
              <div>
                <Select defaultValue={this.props.language} style={{ width: 120 }} onChange={(value)=>{
                  this.props.actions.changeLan(value)
                }}>
                  <Option value="zh">中文(简体)</Option>
                  <Option value="en">English</Option>
                </Select>
              </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Header))
