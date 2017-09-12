import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import store from './store';

import Auth from './components/Auth';
import Main from './components/Main';



const muiTheme = getMuiTheme({
  appBar: {
    color: '#fff',
    textColor: '#000'
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <BrowserRouter>
        <div>
          <Auth />

          <Route exact path="/" component={Main} />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
