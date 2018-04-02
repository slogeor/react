import { combineReducers } from 'redux';
import Todo from './Todo';
import Loading from './Loading';

const reducers = combineReducers({
  Todo,
  Loading,
})

export default reducers;
