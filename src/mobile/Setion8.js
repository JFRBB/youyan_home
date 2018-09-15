import React, { PropTypes } from 'react';
import { withRouter, Link } from 'react-router';
import "./Setion8.scss";
import Arrows from './Arrows';


class Setion8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount(){
  }


  render() {

    return (
      <div id="Setion8">
        <div className="title">加入我们</div>
        <img className="title_bottom" src={require('../static/img/share/title_bottom2.png')} />
        <div className="message">&nbsp;&nbsp;自由办公，让自己做一个经济独立的人共同开启“共赢、共建、共享”的财富大门</div>
        <div className="tips">
          输入您的联系方式,<br/>我们的商务经理会为您详细解答
        </div>
        <input className="phone" placeholder="联系电话"/>
        <input className="phone" placeholder="职位"/>
        <div className="address">
          <input className="address_input" placeholder="所在省"/>
          <input className="address_input" placeholder="所在市"/>
        </div>
        <div className="submit">提交</div>
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

export default Setion8;
