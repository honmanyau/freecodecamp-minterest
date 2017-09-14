import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import store from './store';

import { MAXWIDTH } from '../src/common';

import Auth from './components/Auth';
import Main from './components/Main';
import Dashboard from './components/Dashboard';



const muiTheme = getMuiTheme({
  appBar: {
    color: '#fff',
    textColor: '#000'
  },
  "floatingActionButton": {
      color: '#fff',
      iconColor: '#999'
  }
});

const styles = {
  container: {
    maxWidth: MAXWIDTH + 'px',
    margin: 'auto'
  }
};

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <BrowserRouter>
        <div style={styles.container}>
          <Auth />

          <Route exact path="/" component={Main} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
