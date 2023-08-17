import {legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import forumReducer from '../Redux/ForumPage/reducer';

const rootReducer = combineReducers({
  forum: forumReducer,
  
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
