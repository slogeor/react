import fetch from 'cross-fetch';

// 显示要选的 subreddit
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit,
  }
}

// 发送请求
export const REQUEST_POSTS = 'REQUEST_POSTS';
function requestPosts(subreddit) {
  retrun {
    type: REQUEST_POSTS,
    subreddit,
  }
}

// 接受数据
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receiveAt: Date.now(),
  }
}

// 刷新
export const  INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit,
  }
}

// thunk  action 创建函数
// 使用方法  store.dispatch(fetchPosts('reatjs'))
export function fetchPosts(subreddit) {
  // Thunkmiddleware 知道如何处理函数,  dispatch 方法通过参数形式传给函数，以此来让它自己也能 dispatch action

  return function(dispatch) {

    // 首次 dispatch: 更新应用的 state 来通知 API 发起请求
    dispatch(requestPosts(subreddit))

    // thunk middleware 调用的函数可以有返回值
    // 它会被当做 dispatch 方法的返回值传递

    // 这里返回一个等待处理的 promise, 这并不是 redux middleware 所必须的

    return fecth (`http://localhost:3000/r/${subreddit}.json`)
      .then(response =>
        // 不要使用 catch ，因为会捕获在 dispatch 和渲染中出现的任何错误，导致 'Unexpected batch numebr' 错误
        response.json(),
        error => console.log('error occurred:', error)
      )
      .then(json =>
        // 这里可以多次 dispatch
        dispatch(receivePosts(subreddit, json))
      )
  }
}
