import React from 'react';
import Child from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        baseType: 'hello react',
        arrayType: ['a', 'b', 'c'],
        objType: {
          name: 'slogeor',
          age: '11',
        }
      }
    }
  }

  componentDidMount() {
    setInterval(() => {
      const config = this.state.config;
      this.setState({
        config: {
          baseType: config.baseType,
          arrayType: config.arrayType,
          objType: config.objType,
        }
      })
      console.log('parent state:', JSON.stringify(this.state.config))
    }, 3000)
  }

  render () {
    return (
      <div>
        <div>props 传值</div>
        <Child config={this.state.config} />
      </div>
    )
  }
}

export default Parent;
