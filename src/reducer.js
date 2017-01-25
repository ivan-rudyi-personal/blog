import {combineReducers} from 'redux';
import posts from './posts/reducers';
import {reducer as formReducer} from 'redux-form';

const appReducer = combineReducers({
  posts,
  form: formReducer
});

export default appReducer
