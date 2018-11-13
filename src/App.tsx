import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {runtime} from './reducer/runtime';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainPage from './pages/main-page'
import Registration from "./pages/registration/index";

const rootReduser = combineReducers({
    runtime,
    form: formReducer,
});

const store = createStore(
    rootReduser,
);


class App extends React.Component {
  public render() {
    return (
        <Provider store={store}>
          <MuiThemeProvider>
              <Router >
                  <Switch>
                      <Route exact={true} path='/' component={MainPage}/>
                      <Route path='/registration' component={Registration}/>
                  </Switch>
              </Router>
          </MuiThemeProvider>
        </Provider>
    );
  }
}

export default App;
