import React, { PropTypes } from 'react';
import { withRouter, Link, hashHistory } from 'react-router';
import "./Home.scss";
import "../styles/base.scss";
import Carousel from 'nuka-carousel';
import Setion1 from './Setion1';
import Setion2 from './Setion2';
import Setion3 from './Setion3';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex:0,
    }
  }
  componentWillMount(){
    this.letterHeight = document.body.clientHeight;
  }

  settings = () => ({
    infinite: true,
    wrapAround: false,
    autoplay: false,
    vertical: true,
    afterSlide: slideIndex => setTimeout(()=>{this.setState({slideIndex})},500)
  });

  carousel = () =>{
    const {slideIndex} = this.state;
    const content = [
      <Setion1 show={slideIndex==0}/>,
      <Setion2 show={slideIndex==1}/>,
      <Setion3 show={slideIndex==2}/>,
    ];
    let ComContent = content.map((item, index)=>{
      return (
        <div className='letter-carousel' style={{height:this.letterHeight + 'px'}} key={index}>
          {item}
        </div>
      );
    });
    return (
      <Carousel className="scrollView" {...this.settings()}>
        {ComContent}
      </Carousel>
    );
  }

  render() {
    return (
      <div id='Home' style={{height:this.letterHeight + 'px'}}>
        <div id="mobPreLogin_Letter" style={{height:this.letterHeight + 'px'}}>
          {this.carousel()}
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

export default Home;
