import React from 'react'
import SubmitInput from './component/SubmitInput';
import TodoList from './component/TodoList';
import Footer from './component/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.todoList = [];
    this.state = {
      list: [],
      filterType: 'SHOW_ALL',
    };
    // 按钮
    this.onSubmit = this.onSubmit.bind(this);
    // 切换
    this.onTodoClick = this.onTodoClick.bind(this);
    // 过滤
    this.onFilterClick = this.onFilterClick.bind(this);
    // 获取todo
    this.getTodoList = this.getTodoList.bind(this);
  }

  // 按钮提交
  onSubmit(value) {
    const len = this.todoList.length;
    this.todoList.push({
      id: Number(len) + 1,
      text: value,
      completed: false,
    });

    this.setState({
      list: this.todoList,
    })
  }

  // 列表项的点击事件
  onTodoClick(itemId) {
    for (let i = 0, len = this.todoList.length; i < len; i += 1) {
      if (Number(this.todoList[i].id) === Number(itemId)) {
        this.todoList[i].completed = !this.todoList[i].completed;
      }
    }
    this.setState({
      list: this.todoList,
    })
  }

  getTodoList(type) {
    if (type === 'SHOW_ALL') {
      return this.todoList;
    }
    let list = [];
    for(let i = 0, len = this.todoList.length; i < len; i += 1) {
      const item = this.todoList[i];
      if (type === 'SHOW_ACTIVE' && !item.completed) {
        list.push(item);
      } else if (type === 'SHOW_COMPLETED' && item.completed) {
        list.push(item);
      }
    }
    return list;
  }

  // 筛选
  onFilterClick(type) {
    const list = this.getTodoList(type);
    this.setState({
      list,
      filterType: type,
    });
  }

  render() {
    const { list, filterType } = this.state;
    return (
      <div>
        <SubmitInput onSubmit={this.onSubmit} />
        <TodoList list={list} onTodoClick={this.onTodoClick} />
        <Footer onFilterClick={this.onFilterClick} activeType={filterType} />
      </div>
    )
  }
}

export default App
