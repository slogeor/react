import { combineReducers } from 'redux';
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT,
} from './action';

// 显示要选的 subreddit
function selectedSubreddit(state = 'reactjs', action) {
  switch(action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit,
      break;
    default:
      return state;
  }
}

// 执行过程
function posts( state = {}, action) {
  const {
    isFetching: false,
    didInvalidate: false,
    items: [],
  } = state;

  switch(action.type) {
    // 刷新
    case: INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    // 发起请求
    case: REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    // 接收到数据
    case: RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
}

function postsBySubreddit(state = {}, action) {
  switch(action.type) {
    case INVALIDATE_SUBREDDIT:
    case REQUEST_POSTS:
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: post(state[action.subreddit], action)
      })
    default:
      return state;
  }
}


export default = combineReducers({
  postsBySubreddit,
  selectedSubreddit,
})
