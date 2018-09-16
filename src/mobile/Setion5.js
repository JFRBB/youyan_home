import React, { PropTypes } from 'react';
import { withRouter, Link } from 'react-router';
import "./Setion5.scss";
import Arrows from './Arrows';


class Setion5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount(){
  }


  render() {

      return (
          <div id="Setion5">
              <div className="containers" style={this.props.show?{display:'flex'}:{display:'none'}}>
                  <div className="title">过程无忧</div>
                  <img className="title_bottom" src={require('../static/img/share/titleBgc.png')} />
                  <div className="message">
                      <ul>
                          <li className="list1"><span className="number">1</span>无需离职辞工，轻松开启第二职业</li>
                          <li className="list2"><span className="number">2</span>一天10通电话，获客精准无忧</li>
                          <li className="list3"><span className="number">3</span>超低门槛进入，两人协同更有干劲</li>
                          <li className="list4"><span className="number">4</span>智能管理后台，业绩动态实时了解</li>
                          <li className="list5"><span className="number">5</span>自有法务律师，保障合伙人利益</li>
                          <li className="list6"><span className="number">6</span>业务模式、文宣材料总部支持</li>
                          <li className="list7"><span className="number">7</span>总部负责催缴付费，让您不丢面子</li>
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

export default Setion5;
