import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import reducer from './reducer';
import Posts from './posts/Posts';
import Post from './posts/Post';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Posts}/>
        <Route path="post/:id" component={Post}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
