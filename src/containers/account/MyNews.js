import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import './MyNews.scss';

class MyNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsTypeIndex: 0,
      newsTypeName: '全部',
    };
  }

  render() {
    let newsArr = ['全部', '资产', '安全'];
    return (
      <div id="MyNews">
        <div className="myNews_header_content">
          <div className="myNews_header">
            <span className="divider"></span>
            我的消息
          </div>
          <div className="news_type">
            <div className="type_label">消息类型</div>
            {
              newsArr.map((item, index) => {
                return(
                  <div key={index} className={this.state.newsTypeIndex === index?"newsItem active":"newsItem"} onClick={() => {
                    this.setState({newsTypeIndex: index})
                  }}>{item}</div>
                )
              })
            }
          </div>
          <div className="news_content">
            <img className="empty_img" src={require('../../static/img/account/empty_img.png')}/>
            <p>无内容</p>
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

export default MyNews
