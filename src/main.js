
import React, { Component } from 'react';
import { Link, } from 'react-router-dom';

import {connect} from 'react-redux';
import Action from './action/action'
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "hahaha",
      searchType: '',
      num: this.props.count
    };
  }

  render() {
    return (
      <div className="App">
        <Link to={{pathname:"/home", query:{key:'hahah'}}}>点我跳转</Link>
        <p className="App-intro" onClick={()=>{
          this.props.history.push({pathname:'/home', state:{key:'6666'}});
        }}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>当前计数：{this.props.count}</div>
        <div onClick={()=>{this.props.actions.addCount(++this.state.num)}}>计数+1</div>

      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state);
  return{
      count:state.mainReducer.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Action, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
