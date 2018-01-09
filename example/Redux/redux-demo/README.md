### Redux 使用

- 定义 action 函数
- 初始化 store, type 是 `@@redux/INIT`
- 监听 store 的变化
- 触发 action 函数

### 知识点

* combineReducers 可以将多个子 reducer 合并成一个
* `store.dispatch(action)` 会触发 reducer 的每一个函数
* reducer 函数不会对 type 的唯一性判断

### TOOD

* `store.dispatch(action)` 如何将 action 的 type  的 reducer 的 type 匹配上
* reducer 函数执行的时机
* 封装 action 创建函数，放到 action.js
* 封装 reducer 函数，放到 reducer.js
* index.js 通过 redux 库，将 action 和 reducer 连起来
