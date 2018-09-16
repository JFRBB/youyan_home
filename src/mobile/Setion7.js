import React, { PropTypes } from 'react';
import { withRouter, Link } from 'react-router';
import "./Setion7.scss";
import Arrows from './Arrows';


class Setion7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount(){
  }


  render() {

      return (
          <div id="Setion7">
              <div className="containers" style={this.props.show?{display:'flex'}:{display:'none'}}>
                  <div className="title">奖励/扶持</div>
                  <img className="title_bottom" src={require('../static/img/share/titleBgc.png')} />
                  <div className="message">
                      <ul>
                          <li>1、当地首年业绩前两名奖励宝马车</li>
                          <li>2、优秀者有机会晋升总部高级合伙人</li>
                          <li>3、优秀者会优先入选总部分公司成员</li>
                          <li>4、每年业绩优秀者可参加总部嘉年华</li>
                          <li>5、名额有限，满额即止，确保利益</li>
                          <li>6、中途退出，可向总部申请，全额退款</li>
                          <li>7、优惠计划可一人认领两名份额</li>
                      </ul>
                  </div>
                  <div>
                      <img className="people" src={require('../static/img/share/people.png')} />
                      <img className="rise" src={require('../static/img/share/rise.png')} />
                  </div>

                  <Arrows />

              </div>
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

export default Setion7;
