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
        <div className="title">我们如何破解这个难题?</div>
        <img className="title_bottom" src={require('../static/img/share/title_bottom.png')} />
        <div className="message">&nbsp;&nbsp;&nbsp;把消费纠纷问题扼杀在源头<br/>让消费者占据主动地位</div>

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

export default Setion3;
