import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
    };

    this.incrementMultiple = this.incrementMultiple.bind(this);
    this.onPressClick = this.onPressClick.bind(this);
    this.increment = this.increment.bind(this);
  }

  increment(state, props) {
    console.log('increment:', state)
    return { count: state.count + 1 };
  }

  incrementMultiple() {
    // this.setState({count: this.state.count + 1});
    // this.setState({count: this.state.count + 1});
    // this.setState({count: this.state.count + 1});
    this.setState(this.increment);
    this.setState(this.increment);
    // this.setState({count: this.state.count + 1});
    this.setState(this.increment);
  }

  onPressClick() {
    this.incrementMultiple();
  }

  componentWillMount() {
    console.log("componentWillMount=", this.state.count)
    // this.incrementMultiple();
  }

  componentDidMount() {
    console.log("componentDidMount=", this.state.count)
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log("componentWillReceiveProps state=", this.state.count)
    console.log("componentWillReceiveProps nextProps=", nextProps)
    console.log("componentWillReceiveProps nextState=", nextState)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate state=", this.state.count)
    console.log("shouldComponentUpdate nextProps=", nextProps)
    console.log("shouldComponentUpdate nextState=", nextState)
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate=", this.state.count)
  }

  componentDidUpdate() {
    console.log("componentDidUpdate=", this.state.count)
  }

  render () {
    console.log("render=", this.state.count)
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.onPressClick}>点我</button>
        <span>count: {count}</span>
      </div>
    )
  }
}

export default Demo;
