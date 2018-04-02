import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { selectSubreddit, fetchPosts } from './action';
import reducer from './reducer';

const loggerMiddleward = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(
    // dispacth() 函数
    thunkMiddleware,
    // 便捷的 middleware，用来打印 action 日志
    loggerMiddleward
  )
);

store.dispatch(selectSubreddit('reactjs'));

// thunk 的优点是它的结果可以被再次 dispatch
store
  .dispatch(fetchPosts('reactjs'))
  .then(() => console.log(store.getState())
)
