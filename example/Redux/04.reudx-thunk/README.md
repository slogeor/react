### 目录结构
  - action:  存放 action 函数
  - reducer: 存放 reducer 函数
  - view:  页面视图
  - index.js 页面容器

### 页面入口

```js
import React from 'react'
import { render } from 'react-dom'
import { createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
// 业务组件
import Todo from './view/Todo'
import action from './action';
import reducer from './reducer'
const store = createStore(reducer);

// Map Redux state to component props
function mapStateToProps(state) {
  console.log('state:', state)
  return state.Todo;
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  console.log('action:', action);
  return  bindActionCreators(action.Todo, dispatch)
}

// connect 函数
const TodoWrap = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

render(
  <Provider store={store}>
    <TodoWrap />
  </Provider>,
document.getElementById('root')
)
```

### redux 入口

```js
import { combineReducers } from 'redux';
import Todo from './Todo';
import Loading from './Loading';

// 将子reducer 合成一个 reducers
const reducers = combineReducers({
  Todo,
  Loading,
})

export default reducers;
```

### TODO

- bindActionCreators
- redux-actions
