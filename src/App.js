import React, { Component } from 'react';
import './styles/base.scss';
import Header from './containers/layout/Header';
import Foot from './containers/layout/Foot';

class Main extends Component {

  componentWillMount(){

  }

  render() {
    return (
      <div id='app' style={{minWidth: '1280px'}}>
        <Header currTab={this.props.location.pathname}/>
        {this.props.children}
        <Foot/>
      </div>
    );
  }
}

export default Main;
