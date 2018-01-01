import React from 'react';

// class Child_1 extends React.Component {
//   componentWillReceiveProps(nextProps) {
//     debugger
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     debugger
//     return true;
//   }

//   render () {
//     console.log('aaaa')
//     const { baseType } = this.props;
//     return (
//       <div>
//         <div>
//           <span>基本类型</span>
//           <span>{JSON.stringify(baseType)}</span>
//         </div>
//       </div>
//     )
//   }
// }

function Child_1(props) {
  console.log('aaaa')
  const { baseType } = props;
  return (
    <div>
      <div>
        <span>基本类型</span>
        <span>{JSON.stringify(baseType)}</span>
      </div>
    </div>
  )
}
export default Child_1;
