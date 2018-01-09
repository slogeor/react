import React from 'react'
import PropTypes from 'prop-types'

function Link(props) {
  console.log(props)
  const { active, children, onClick } = props;
  if (active) {
    return <span>{children}</span>
  }
  return (
    // eslint-disable-next-line
    <a href="#"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
