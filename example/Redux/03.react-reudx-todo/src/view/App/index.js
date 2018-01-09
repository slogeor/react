import React from 'react'
import SubmitInput from './component/SubmitInput';
import TodoList from './component/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTodoClick = this.onTodoClick.bind(this);

    this.state = {
      list: [],
    }
  }

  componentWillMount() {
    this.setState({
      list: [{
        id: 1,
        text: 'Redux',
        completed: false,
      }]
    })
  }

  // 提交事件
  onSubmit(value) {
    let { list = [] } = this.state;
    const len = list.length;
    list.push({
      id: Number(len) + 1,
      text: value,
      completed: false,
    });

    this.setState({
      list,
    })
  }

  // 列表项的点击事件
  onTodoClick(itemId) {
    let { list = [] } = this.state;
    for (let i = 0, len = list.length; i < len; i += 1) {
      if (Number(list[i].id) === Number(itemId)) {
        list[i].completed = !list[i].completed;
      }
    }
    this.setState({
      list,
    })
  }



  render() {
    const { list } = this.state;
    return (
      <div>
        <SubmitInput onSubmit={this.onSubmit} />
        <TodoList  list={list} onTodoClick={this.onTodoClick} />
      </div>
    )
  }
}

export default App
