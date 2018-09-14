import React, { Component } from 'react';
import {connect} from 'react-redux';
import Action from './action/action'
import { bindActionCreators } from 'redux';
import axios from "axios";
import API from './api/index';  //导入封装的网络请求
import querystring from 'querystring';

class NewPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      num: this.props.count,
    }
  }
  componentWillMount(){
    let params = {
      name: '434441953@qq.com',
      password: '123456'
    }
    API.login(params).then(res => {
      console.log(res);
    })
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <div>哈哈哈哈哈哈或或或或或</div>
        <div>当前计数：{this.props.count}</div>
        <div onClick={()=>{this.props.actions.addCount(++this.state.num)}}>计数+1</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    count:state.mainReducer.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Action, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(NewPage)
