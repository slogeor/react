import React from 'react'
import { render } from 'react-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
import App from './view/App'
// import reducer from './reducer'

// const store = createStore(reducer)
// <Provider store={store}>
//  <App />
// </Provider>,

render(
  <App />,
  document.getElementById('root')
)
