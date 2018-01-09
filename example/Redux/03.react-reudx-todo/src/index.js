import React from 'react'
import { render } from 'react-dom'
import { createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
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
