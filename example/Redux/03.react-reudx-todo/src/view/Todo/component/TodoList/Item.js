/**
 * 列表的item组件
 */
import React from 'react'
import PropTypes from 'prop-types'

function Item(props) {
  const { onClick, completed, text } = props;
  if (!text) return null;
  return (
    <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
  )
}

Item.propTypes = {
  // 点击事件
  onClick: PropTypes.func.isRequired,
  // 状态
  completed: PropTypes.bool.isRequired,
  // 文本
  text: PropTypes.string.isRequired
}

Item.defaultProps = {
  onClick: () => {},
  completed: false,
  text: '',
}


export default Item
