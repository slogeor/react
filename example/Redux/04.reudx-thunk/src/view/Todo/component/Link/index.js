/**
 * Link 组件
 */
import React from 'react'
import PropTypes from 'prop-types'

function Link(props) {
  const {type, active, children, onClick } = props;
  if (active) {
    return <span>{children}</span>
  }
  return (
    // eslint-disable-next-line
    <a href="#"
      onClick={e => {
        e.preventDefault()
        onClick(type)
      }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  // 激活状态
  active: PropTypes.bool.isRequired,
  // 类型
  type: PropTypes.string.isRequired,
  // 子节点
  children: PropTypes.node.isRequired,
  // 点击事件
  onClick: PropTypes.func.isRequired
}

Link.defaultProps = {
  active: false,
  type: 'SHOW_ALL',
  children: null,
  onClick: () => {},
}

export default Link
