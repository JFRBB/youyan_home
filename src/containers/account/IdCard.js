import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import './IdCard.scss';


class IdCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div id="IdCard">
        <div className="idCard_container_top">
          <div className="idCard_header">
            <span className="divider"></span>
            实名认证
          </div>
          <div className="basic_info">
            <div className="basic_info_item">
              <div className="label">姓名</div>
              <div className="basic_text">未认证</div>
            </div>
            <div className="basic_info_item">
              <div className="label">ID</div>
              <div className="basic_text">108591</div>
            </div>
            <div className="basic_info_item">
              <div className="label">邮箱</div>
              <div className="basic_text">13123308812</div>
            </div>
            <div className="basic_info_item">
              <div className="label">等级1</div>
              <div className="basic_text"><span className="no_idcard">未认证</span><span className="handle_idCard">认证</span></div>
            </div>
          </div>
        </div>
        <div className="idCard_container_bottom">
          <div className="idCard_header">
            <span className="divider"></span>
            每日提币限额
          </div>
          <div className="limit_content">
            <div className="limit_header">
              <div className="number_asset">数字资产</div>
              <div className="level_0">等级0</div>
              <div className="level_1">等级1</div>
              <div className="level_2">等级2</div>
            </div>
            {
              [1,1,1,1,1].map((item, index) => {
                return (
                  <div className="limit_body" key={index}>
                    <div className="">BTC</div>
                    <div className="">禁止转出</div>
                    <div className="">无限制</div>
                    <div className="">无限制</div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
  }
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default IdCard
