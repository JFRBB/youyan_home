import React, { Component } from 'react';
import App from './App';
import NoFind from './containers/404';
import newPage from './newPage';
import main from './main';
import { Route } from 'react-router-dom';
import Bundle from './Bundle';

class Routes extends Component {

  render() {
    // const HomePage = (props) => (
    //     <Bundle load={() => import('./containers/homePage/Home')}>
    //         {(HomePage) => <HomePage {...props}/>}
    //     </Bundle>
    // );

    return (
      <App {...this.props}>

      </App>
    )
  }
}


export default Routes
