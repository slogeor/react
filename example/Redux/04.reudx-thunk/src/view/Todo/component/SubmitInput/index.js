/**
 * 带文本框的提交按钮
 */
import React from 'react'
import PropTypes from 'prop-types'

function SubmitInput(props) {
  let inputRef;
  return (
    <div>
      <input
        placeholder={props.placeholder}
        ref={el => { inputRef = el; }}
      />
      <button
        type="submit"
        onClick={() => {
          props.onSubmit(inputRef.value)
          inputRef.value = '';
        }
      }>
        提交
      </button>
    </div>
  )
}

SubmitInput.propTypes = {
  // 占位
  placeholder: PropTypes.string,
  // 点击事件
  onSubmit: PropTypes.func.isRequired,
}

SubmitInput.defaultProps = {
  placeholder: '输入关键字',
  onSubmit: () => {}
}

export default SubmitInput


