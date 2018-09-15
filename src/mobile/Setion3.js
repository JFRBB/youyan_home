import React, { PropTypes } from 'react';
import { withRouter, Link } from 'react-router';
import "./Setion3.scss";
import Arrows from './Arrows';


class Setion3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount(){
  }


  render() {

    return (
      <div id="Setion3">
        <div className="containers" style={this.props.show?{display:'block'}:{display:'none'}}>
          <div className="title">我们如何破解这个难题?</div>
          <img className="title_bottom" src={require('../static/img/share/title_bottom.png')} />
          <div className="message">&nbsp;&nbsp;&nbsp;把消费纠纷问题扼杀在源头<br/>让消费者占据主动地位</div>
          <div className="item_box item1">
            <div className="itemName">
              <span>掌约</span>
              <span className="split"></span>
            </div>
            <div className="item_message">
              契约规范/维权依据，为契约双方提供行为规范<br/>防患于未然，保护消费者权益，规范商业合作行为
            </div>
          </div>
          <div className="item_box item2">
            <div className="itemName">
              <span>默评</span>
              <span className="split"></span>
            </div>
            <div className="item_message">
              客观真实/消费依据 ，消费评价，建立监督反馈机制<br/>商家口碑、风评公开显示，提供消费参考依据
            </div>
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

export default Setion3;
