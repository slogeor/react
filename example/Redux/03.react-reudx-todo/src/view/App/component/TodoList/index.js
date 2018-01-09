/**
 * todo列表组件
 */
import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

function TodoList(props) {
  const { list = [], onTodoClick } = props;
  if (list.length === 0) return (
    <div>暂无记录</div>
  );

  return (
    <ul>
      {
        list.map(todo =>
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
  onTodoClick: PropTypes.func.isRequired
}

TodoList.defaultProps = {
  list: [],
  onTodoClick: () => {},
}

export default TodoList
