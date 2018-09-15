import React, { PropTypes } from 'react';
import { withRouter, Link } from 'react-router';
import "./Setion1.scss";
import Arrows from './Arrows';



class Setion1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount(){
  }


  render() {

    return (
      <div id="Setion1">
        <img className="home_title" src={require('../static/img/share/home_title.png')} />
        <img className="home_coin" src={require('../static/img/share/coin.png')} />
        <img className="home_box" src={require('../static/img/share/home_box.png')} />
        <img className="home_logo" src={require('../static/img/share/home_logo.png')} />
        <Arrows />
        <div className="title1">胜帆之家</div>
        <div className="title2">全国城市合伙人</div>
        <div className="title3">突破"集体办公"传统模式</div>
        <div className="title4">不再开公司开店</div>
        <div className="title5">不必单打独斗创业</div>
        <div className="sub_title">家庭经济消费&契约管理服务解决方案</div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default Setion1;
