import * as React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers,applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { composeWithDevTools } from 'redux-devtools-extension';
import {runtime} from './reducer/runtime';
import {  Router, Route, Switch } from "react-router-dom";

import { history } from "./helpers/historyPush";

import MainPage from './pages/main-page'
import Registration from "./pages/registration/index";
import AllProducts from "./pages/all-products/index";

const rootReduser = combineReducers({
    runtime,
    form: formReducer,
});

export const store = createStore(
    rootReduser,
    // composeWithDevTools(applyMiddleware(thunk)),
);

class App extends React.Component{
  public render() {
    return (
        <Provider store={store}>
          <MuiThemeProvider>
              <Router history={history}>
                  <Switch>
                      <Route exact={true} path='/' component={MainPage}/>
                      <Route path='/registration' component={Registration}/>
                      <Route path='/all-products' component={AllProducts}/>
                  </Switch>
              </Router>
          </MuiThemeProvider>
        </Provider>
    );
  }
}

export default App;
