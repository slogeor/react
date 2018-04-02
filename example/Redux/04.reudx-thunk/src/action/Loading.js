/**
 * action 函数
 */

// 显示
const show = () => ({
  type: 'SHOW_LOADING',
})

// 隐藏
const hide = () => ({
  type: 'HIDE_LOADING',
})

export default {
  show,
  hide,
}
