import React, { PropTypes } from 'react';
import { withRouter, Link, hashHistory } from 'react-router';
import "./Home.scss";
import "../styles/base.scss";
import Carousel from 'nuka-carousel';
import Setion1 from './Setion1';
import Setion2 from './Setion2';
import Setion3 from './Setion3';
import Setion4 from './Setion4';
import Setion5 from './Setion5';
import Setion6 from './Setion6';
import Setion7 from './Setion7';
import Setion8 from './Setion8';
import Setion9 from './Setion9';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex:'',
    }
  }
  componentWillMount(){
    this.letterHeight = document.body.clientHeight;
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({slideIndex:0})
    },1)
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
      <Setion1 show={slideIndex===0}/>,
      <Setion2 show={slideIndex===1}/>,
      <Setion3 show={slideIndex===2}/>,
      <Setion4 show={slideIndex===3}/>,
      <Setion5 show={slideIndex===4}/>,
      <Setion6 show={slideIndex===5}/>,
      <Setion7 show={slideIndex===6}/>,
      <Setion8 show={slideIndex===7}/>,
      <Setion9 show={slideIndex===8}/>,
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
      <div id='Home'>
        <div id="mobPreLogin_Letter">
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
