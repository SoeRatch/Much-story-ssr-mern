/* eslint-disable-next-line global-require */
import 'babel-polyfill'

import Immutable from 'immutable'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import {createStore,combineReducers,compose,applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'
import decode from 'jwt-decode';
import App from '../shared/app'
import { APP_CONTAINER_SELECTOR } from '../shared/config'
import { isProd } from '../shared/util'

import {user} from '../shared/reducer/user';
import {blog,comments} from '../shared/reducer/blogs';
import {collections} from '../shared/reducer/collections';
import {theme} from '../shared/reducer/themes';
import {userLoggedIn} from '../shared/actions/auth';
import setAuthorizationHeader from '../shared/utils/setAuthorizationHeader';
import Loadable from 'react-loadable';

const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const preloadedState = window.__PRELOADED_STATE__
const store = createStore(combineReducers(
  { 
    user,
    blog,
    theme:theme,
    collections,
    comments
  }),
  {
    blog:Immutable.fromJS(preloadedState.blog)
   },
  composeEnhancers(applyMiddleware(thunk)))


if(localStorage.muchStoryJWT){
  const payload = decode(localStorage.muchStoryJWT)
  const user ={ 
    token: localStorage.muchStoryJWT,
    email: payload.email,
    username: payload.username,
    confirmed: payload.confirmed
    };
  setAuthorizationHeader(localStorage.muchStoryJWT);
  store.dispatch(userLoggedIn(user));
}

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

const wrapApp = (AppComponent, reduxStore) =>
  <Provider store={reduxStore}>
    <BrowserRouter>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </BrowserRouter>
  </Provider>

Loadable.preloadReady().then(() => {
    ReactDOM.render(wrapApp(App, store), rootEl);
  });

if (module.hot) {
  module.hot.accept('../shared/app', () => {
    const NextApp = require('../shared/app').default
    ReactDOM.render(wrapApp(NextApp, store), rootEl)
  })
}





