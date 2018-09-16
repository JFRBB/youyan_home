import React, { PropTypes } from 'react';
import { withRouter, Link } from 'react-router';
import "./Setion4.scss";
import Arrows from './Arrows';


class Setion4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount(){
  }


  render() {

      return (
          <div id="Setion4">
              <div className="containers" style={this.props.show?{display:'flex'}:{display:'none'}}>
                  <div className="title">财富无忧</div>
                  <img className="title_bottom" src={require('../static/img/share/titleBgc.png')} />
                  <div className="message">
                      <ul>
                          <li className="item_list1"><span className="number">1</span>平台项目自带流量和数据</li>
                          <li className="item_list2"><span className="number">2</span>精准客户资源总部免费提供</li>
                          <li className="item_list1"><span className="number">3</span>推荐合伙人加盟获取高额奖励</li>
                          <li className="item_list2"><span className="number">4</span>享受旗下合伙人业绩分成</li>
                          <li className="item_list1"><span className="number">5</span>认领商户付费，获得高额分成</li>
                          <li className="item_list2"><span className="number">6</span>未达获利额度返还全额加盟费</li>
                          <li className="item_list1"><span className="number">7</span>超低加盟费，无其他隐形费用</li>
                      </ul>
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

export default Setion4;
