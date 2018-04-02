### setState

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

### 参考文章

- [https://zhuanlan.zhihu.com/p/25954470](https://zhuanlan.zhihu.com/p/25954470)
