import {combineReducers} from 'redux';
import posts from './posts/reducers';
import pagination from './common/pagination/reducers';
import {reducer as formReducer} from 'redux-form';


const appReducer = combineReducers({
  posts: posts,
  pagination,
  form: formReducer
});

export default appReducer
