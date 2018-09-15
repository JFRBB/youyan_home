import React, { PropTypes } from 'react';
import { withRouter, Link } from 'react-router';
import "./Setion9.scss";
import Arrows from './Arrows';


class Setion9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount(){
  }


  render() {

    return (
      <div id="Setion9">
        <div className="message">
          <img className="success" src={require('../static/img/share/success.png')} />
          <span className="tips">提交成功！</span>
          <span className="text">我们将在24小时内联系您,请保持电话畅通。</span>
        </div>
        <div className="adv_phone">
          <div className="title">点击免费咨询</div>
          <div className="phone">招募加盟热线：<span>0592-5453214</span></div>
        </div>
        <img className="logo"  src={require('../static/img/share/logo.png')} />
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

export default Setion9;
