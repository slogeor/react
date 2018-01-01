import React from 'react';
import Child1 from './Child_1';

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      config: props.config,
    };
  }

  componentWillMount() {
    console.log(this.props)
  }

  componentWillReceiveProps(nextProps) {
  }

  componentDidMount() {

  }

  shouldComponentUpdate(nextProps, nextState) {
    debugger
    return true;
  }

  render () {
    const { config } = this.props;
    return (
      <div>
        <div>
          <div>
            <h4>Child</h4>
            <div>
              <span>基本类型</span>
              <span>{JSON.stringify(config.baseType)}</span>
            </div>
            <div>
              <span>数组类型</span>
              <span>{JSON.stringify(config.arrayType)}</span>
            </div>
            <div>
              <span>对象类型</span>
              <span>{JSON.stringify(config.objType)}</span>
            </div>
          </div>
          <div>
            <h4>Child_1</h4>
            <Child1 baseType={config.arrayType} />
          </div>
        </div>
      </div>
    )
  }
}

export default Child;
