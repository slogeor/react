import React from 'react';

class List extends React.Component {
  constructor() {
    super();
    this.state = { hasBeenVisible: false };
  }
  componentDidMount() {
    console.log('componentDidMount List isVisible:', this.props.isVisible)
    if (this.props.isVisible) {
      this.setState({ hasBeenVisible: true });
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log('List nextProps:', nextProps)
    if (!this.state.hasBeenVisible && nextProps.isVisible) {
      this.setState({ hasBeenVisible: true });
    }
  }
  render() {
    return (
      <div>
        <h1>List</h1>
        <h4>List 1</h4>
        {
          this.state.hasBeenVisible
          ?
            <ul>
              <li>ABC</li>
              <li>ABC</li>
              <li>ABC</li>
              <li>ABC</li>
              <li>ABC</li>
              <li>ABC</li>
            </ul>
          :
            <div className="placeholder" />
        }
        <h4>List 2</h4>
        {
          this.state.hasBeenVisible
          ?
            <ul>
              <li>BBB</li>
              <li>BBB</li>
              <li>BBB</li>
              <li>BBB</li>
              <li>BBB</li>
              <li>BBB</li>
            </ul>
          :
          <div className="placeholder" />
        }
      </div>
    );
  }
}

export default List;
