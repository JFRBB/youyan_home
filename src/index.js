import React from 'react';
import {render} from 'react-dom';
import { LocaleProvider } from 'antd';
import { Provider } from 'react-redux';
import { HashRouter, Switch, BrowserRouter,Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import Share from './mobile/Home';
const store = configureStore();

if (!!window.ActiveXObject || "ActiveXObject" in window){
  alert("请使用谷歌浏览器，360极速浏览器，QQ浏览器，火狐浏览器等主流浏览器打开，暂不支持带有IE内核的浏览器");
}else {
  if (module.hot) {
    module.hot.accept(() => {
      render(
        <Provider store={store}>
          <LocaleProvider locale={zh_CN}>
            <HashRouter>
              <Switch>
                <Route path='/' component={Share}/>
              </Switch>
            </HashRouter>
          </LocaleProvider>
        </Provider>,document.getElementById('root')
      )
    })
  }
}

render(
  <Provider store={store}>
    <LocaleProvider locale={zh_CN}>
      <HashRouter>
        <Switch>
          <Route path='/' component={Share}/>
        </Switch>
      </HashRouter>
    </LocaleProvider>
  </Provider>,document.getElementById('root')
)

registerServiceWorker();
