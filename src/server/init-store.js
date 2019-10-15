import Immutable from 'immutable'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import thunk from 'redux-thunk';
import {collections} from '../shared/reducer/collections';
import {blog} from '../shared/reducer/blogs';
import {theme} from '../shared/reducer/themes';

const initStore = (plainPartialState) => {
  const preloadedState = plainPartialState ? {} : undefined

  if(plainPartialState && plainPartialState.blogcontent){
  	preloadedState.blog=blog(plainPartialState.blogcontent,{});
  }

  if(plainPartialState && plainPartialState.theme){
  	preloadedState.theme=blog(plainPartialState.theme,{});
  }

  return createStore(combineReducers({blog,theme}),
    preloadedState, applyMiddleware(thunk))
}

export default initStore

