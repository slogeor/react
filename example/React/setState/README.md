### part1

#### setState不会立刻改变React组件中state的值

```js
this.setState({count: this.state.count + 1});
this.setState({count: this.state.count + 1});
this.setState({count: this.state.count + 1});
```

三次设置 `setState`，只有一个生效。

#### setState通过引发一次组件的更新过程来引发重新绘制

设置 `setState` 会触发 shouldComponentUpdate、componentWillUpdate、render、componentDidUpdate 生命周期函数，只有在 render 之后，this.state.count 值才会发生变化。

#### 多次setState函数调用产生的效果会合并

```js
this.setState({FirstName: 'Morgan'});
this.setState({LastName: 'Cheng'});
```

等同于

```js
this.setState({FirstName: 'Morgan', LastName: 'Cheng'});
```

#### 函数式的setState用法

```js
function increment(state, props) {
  return {count: state.count + 1};
}

function incrementMultiple() {
  this.setState(increment);
  this.setState(increment);
  this.setState(increment);
}
```

`increment` 会接收到两个参数，第一个是当前的 `state` 值，第二个是当前的 `props`，这个函数应该返回一个对象，这个对象代表想要对`this.state`的更改。

`increment` 函数参数的 `state` 不是 this.state，而是输入参数 state。

`incrementMultiple` 函数调用 this.count 会加 3。

### part2

shouldComponentUpdate 被调用时，this.state 并没有变化，第二个参数 nextState 可以获取即将要发生变化的 state。

setState为什么不会同步更新组件状态，三个假设可以证明。

- setState 自动触发同步的组件更新过程
- setState 自动触发异步的组件更新过程
- setState 根本不触发组件更新过程，让开发者显示驱动更新过程

### setState何时同步更新状态

在 React 的 setState 函数实现中，会根据一个变量 isBatchingUpdates 判断是直接更新 this.state 还是放到队列中回头再说，而 isBatchingUpdates 默认是 false，也就表示 setState 会同步更新 this.state，但是，有一个函数batchedUpdates，这个函数会把 isBatchingUpdates 修改为 true，而当 React 在调用事件处理函数之前就会调用这个batchedUpdates，造成的后果，就是由 React 控制的事件处理过程 setState 不会同步更新 this.state。

### 参考文章

- [https://zhuanlan.zhihu.com/p/25954470](https://zhuanlan.zhihu.com/p/25954470)
- [https://zhuanlan.zhihu.com/p/25990883](https://zhuanlan.zhihu.com/p/25990883)
- [https://zhuanlan.zhihu.com/p/26069727](https://zhuanlan.zhihu.com/p/26069727)

