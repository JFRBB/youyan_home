import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Foot.scss';

class Foot extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div id="Foot">
        <div className="footer">
          <div className="footer_content">
            <div className="foot_left">
              <span className="text1">© 2018 TokenEX.world All Rights Reserved</span>
              <span className="foot_item">关于我们</span>
              <span className="split"></span>
              <span className="foot_item">用户协议</span>
              <span className="split"></span>
              <span className="foot_item">用户隐私</span>
              <span className="split"></span>
              <span className="foot_item">费率标准</span>
            </div>
            <div className="foot_right">
              <img src={require('../../static/img/weibo.png')}/>
              <img src={require('../../static/img/facebook@2x.png')}/>
              <img src={require('../../static/img/Twitter@2x.png')}/>
              <img src={require('../../static/img/wechats.png')}/>
              <img src={require('../../static/img/wechat.png')}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state){

}

function mapDispatchToProps(dispatch) {

}

export default withRouter(Foot)
