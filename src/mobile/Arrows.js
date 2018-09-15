import React, { PropTypes } from 'react';
import { withRouter, Link } from 'react-router';
import "./Arrows.scss";




class Arrows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {

    return (
      <img className="arrows" src={require('../static/img/share/arrows.png')} />
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

export default Arrows;
