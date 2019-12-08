import { combineReducers } from 'redux';
import reducerPosts from './reducer-posts';
import reducerActivePost from './reducer-active-post';
import {reducer as ReducerForm} from 'redux-form';

const rootReducer = combineReducers({
  posts : reducerPosts,
  activePost : reducerActivePost,
  form : ReducerForm
});

export default rootReducer;
