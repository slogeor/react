/**
 * 底部刷选项
 */
import React from 'react'
import PropTypes from 'prop-types'
import Link from '../Link'

function Footer(props) {
  const { activeType, onFilterClick } = props;
  //  active: false,  type: 'SHOW_ALL', onClick: () => {},
  return (
    <p>
      {"Show: "}
      <Link type="SHOW_ALL" active={activeType === 'SHOW_ALL'} onClick={onFilterClick}>
        All
      </Link>
      {", "}
      <Link type="SHOW_ACTIVE" active={activeType === 'SHOW_ACTIVE'} onClick={onFilterClick}>
        Active
      </Link>
      {", "}
      <Link type="SHOW_COMPLETED" active={activeType === 'SHOW_COMPLETED'} onClick={onFilterClick}>
        Completed
      </Link>
    </p>
  )
}

Footer.prototype = {
  // 选中的type
  activeType: PropTypes.string,
  // 点击事件
  onFilterClick: PropTypes.func,
}

Footer.defaultProps = {
  activeType: 'SHOW_ALL',
  onFilterClick: () => {},
}

export default Footer
