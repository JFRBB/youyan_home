import React, { PropTypes } from 'react';
import { withRouter, Link } from 'react-router';
import "./Setion2.scss";
import Arrows from './Arrows';




class Setion2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount(){
  }


  render() {

    return (
      <div id="Setion2">
        <div className="containers" style={this.props.show?{display:'flex'}:{display:'none'}}>
          <div className="title">我们在解决什么难题?</div>
          <img className="title_bottom" src={require('../static/img/share/title_bottom.png')} />
          <div className="message">&nbsp;&nbsp;&nbsp;契约精神缺乏，诚信不足<br/>契约精神缺失，从而导致种种<br/>社会问题，严重影响社会生活</div>
          <div className="item item_list1">
            <img className="item_icon" src={require('../static/img/share/item_icon.png')}/>
            消费防范意识薄弱
          </div>
          <div className="item item_list2">
            <img className="item_icon" src={require('../static/img/share/item_icon.png')}/>
            消费维权成本过高
          </div>
          <div className="item item_list3">
            <img className="item_icon" src={require('../static/img/share/item_icon.png')}/>
            消费主导地位不足
          </div>
          <div className="item item_list4">
            <img className="item_icon" src={require('../static/img/share/item_icon.png')}/>
            缺少纠纷评判依据
          </div>
          <div className="item item_list5">
            <img className="item_icon" src={require('../static/img/share/item_icon.png')}/>
            商业合作频现纠纷
          </div>
          <div className="item item_list6">
            <img className="item_icon" src={require('../static/img/share/item_icon.png')}/>
            纸质票据管理困难
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

export default Setion2;
