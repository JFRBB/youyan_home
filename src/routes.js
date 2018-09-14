import React, { Component } from 'react';
import App from './App';
import NoFind from './containers/404';
import newPage from './newPage';
import main from './main';
import { Route } from 'react-router-dom';
import Bundle from './Bundle';

class Routes extends Component {

  render() {
    const HomePage = (props) => (
        <Bundle load={() => import('./containers/homePage/Home')}>
            {(HomePage) => <HomePage {...props}/>}
        </Bundle>
    );
    const Login = (props) => (
        <Bundle load={() => import('./containers/login/Login')}>
            {(Login) => <Login {...props}/>}
        </Bundle>
    );
    const TransactionCenter = (props) => (
        <Bundle load={() => import('./containers/transaction/TransactionCenter')}>
            {(TransactionCenter) => <TransactionCenter {...props}/>}
        </Bundle>
    );
    const Register = (props) => (
        <Bundle load={() => import('./containers/login/Register')}>
            {(Register) => <Register {...props}/>}
        </Bundle>
    );
    const ForgetCode = (props) => (
        <Bundle load={() => import('./containers/login/ForgetCode')}>
            {(ForgetCode) => <ForgetCode {...props}/>}
        </Bundle>
    );
    const Account = (props) => (
        <Bundle load={() => import('./containers/account/Account')}>
            {(Account) => <Account {...props}/>}
        </Bundle>
    );
    const AddMoney = (props) => (
        <Bundle load={() => import('./containers/account/AddMoney')}>
            {(AddMoney) => <AddMoney {...props}/>}
        </Bundle>
    );
    const OutMoney = (props) => (
        <Bundle load={() => import('./containers/account/OutMoney')}>
            {(OutMoney) => <OutMoney {...props}/>}
        </Bundle>
    );
    const MyEntrust = (props) => (
        <Bundle load={() => import('./containers/account/MyEntrust')}>
            {(MyEntrust) => <MyEntrust {...props}/>}
        </Bundle>
    );
    const AssetManage = (props) => (
        <Bundle load={() => import('./containers/account/AssetManage')}>
            {(AssetManage) => <AssetManage {...props}/>}
        </Bundle>
    );
    const MoneyManage = (props) => (
        <Bundle load={() => import('./containers/account/MoneyManage')}>
            {(MoneyManage) => <MoneyManage {...props}/>}
        </Bundle>
    );
    const BasicInfo = (props) => (
        <Bundle load={() => import('./containers/account/BasicInfo')}>
            {(BasicInfo) => <BasicInfo {...props}/>}
        </Bundle>
    );
    const IdCard = (props) => (
        <Bundle load={() => import('./containers/account/IdCard')}>
            {(IdCard) => <IdCard {...props}/>}
        </Bundle>
    );
    const MyNews = (props) => (
        <Bundle load={() => import('./containers/account/MyNews')}>
            {(MyNews) => <MyNews {...props}/>}
        </Bundle>
    );
    const Mortgage = (props) => (
        <Bundle load={() => import('./containers/account/Mortgage')}>
            {(Mortgage) => <Mortgage {...props}/>}
        </Bundle>
    );
    return (
      <App {...this.props}>
        <Route exact path='/' component={HomePage}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/forgetCode' component={ForgetCode}/>
        <Route path='/app' component={main}/>
        <Route path='/home' component={newPage}/>
        <Route path='/tradcenter' component={TransactionCenter}/>
        <Route path='/achome/' render={() => (
          <Account>
            <Route exact path='/achome/account' component={AssetManage}/>
            <Route exact path='/achome/deposit' component={AddMoney}/>
            <Route exact path='/achome/withdraw' component={OutMoney}/>
            <Route exact path='/achome/myorder' component={MyEntrust}/>
            <Route exact path='/achome/wallet' component={MoneyManage}/>
            <Route exact path='/achome/basic' component={BasicInfo}/>
            <Route exact path='/achome/certification' component={IdCard}/>
            <Route exact path='/achome/message' component={MyNews}/>
            <Route exact path='/achome/mortgage' component={Mortgage}/>
          </Account>
        )}/>
        {/* <Route exact path="*" component={NoFind}/> */}
      </App>
    )
  }
}


export default Routes
