import React from 'react'
import SubmitInput from './component/SubmitInput';
import TodoList from './component/TodoList';
import Footer from './component/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    // 按钮
    this.onSubmit = this.onSubmit.bind(this);
    // 切换
    this.onTodoClick = this.onTodoClick.bind(this);
    // 过滤
    this.onFilterClick = this.onFilterClick.bind(this);
  }

  // 按钮提交
  onSubmit(value) {
    this.props.addTodo(value)
  }

  // 列表项的点击事件
  onTodoClick(itemId) {
    this.props.toggleTodo(itemId)
  }

  // 筛选
  onFilterClick(type) {
    this.props.setVisibilityFilter(type);
  }

  render() {
    console.log('props:', this.props)
    const { todo, filter } = this.props;
    return (
      <div>
        <SubmitInput onSubmit={this.onSubmit} />
        <TodoList list={todo} onTodoClick={this.onTodoClick} activeType={filter} />
        <Footer onFilterClick={this.onFilterClick} activeType={filter} />
      </div>
    )
  }
}

export default App
