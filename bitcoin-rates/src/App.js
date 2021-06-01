import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';

import * as Pages from './pages/index';
import store from './redux/store';
import Header from './Components/Header';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="container-sm m-5 p-5">
        <Switch>
          <Route exact path="/login" component={Pages.Login} />
          <Route exact path="/atualizar" component={Pages.UpdateCurrency} />
          <Route exact path="/" component={Pages.Home} />
          <Route component={Pages.NotFound} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
