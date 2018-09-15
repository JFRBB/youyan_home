import React, { PropTypes } from 'react';
import { withRouter, Link } from 'react-router';
import "./Setion6.scss";
import Arrows from './Arrows';


class Setion6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount(){
  }


  render() {

    return (
      <div id="Setion6">
        <div className="title">合伙人招募</div>
        <img className="title_bottom" src={require('../static/img/share/title_bottom2.png')} />
        <div className="sub_title">面向人群</div>
        <div className="message1">微商朋友；在职公司HR；<br />房产中介；保险经纪；家中带娃的妈妈。</div>
        <div className="sub_title2">合伙加盟费</div>
        <div className="message2">
          <span className="money">6000元/3年</span>
          <span className="money_text">（九月限时优惠，国庆后恢复原价10000元/3年）</span>
        </div>
        <img className="map" src={require('../static/img/share/map.png')} />
        <div className="tips1">全国各地区根据<br/>城市<span>限定名额</span></div>
        <div className="tips2">首批招募城市<br/><span>即将满额！！</span></div>
        <Arrows />
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

export default Setion6;
