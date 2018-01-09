/**
 * todo列表组件
 */
import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

function TodoList(props) {
  const { list = [], onTodoClick, activeType } = props;

  let newList = [];
  switch (activeType) {
    case 'SHOW_ALL':
      newList = list;
      break;
    case 'SHOW_COMPLETED':
      newList = list.filter(t => t.completed);
      break;
    case 'SHOW_ACTIVE':
      newList = list.filter(t => !t.completed);
      break;
    default:
      newList = list;
  }

  if (newList.length === 0) return (
    <div>暂无记录</div>
  );
  return (
    <ul>
      {
        newList.map(todo =>
        <Item
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />)
      }
    </ul>
  )
}

TodoList.propTypes = {
  // 列表数据
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  // 点击事件
  onTodoClick: PropTypes.func.isRequired,
  // 筛选项
  activeType: PropTypes.string,
}

TodoList.defaultProps = {
  list: [],
  onTodoClick: () => {},
  activeType: 'SHOW_ALL',
}

export default TodoList
