import React from 'react';

class Observer extends React.Component {
  constructor() {
    super();
    this.state = { isVisible: false };
    this.io = null;
    this.container = null;
  }
  componentDidMount() {
    this.io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log('entry.isIntersecting:', entry.isIntersecting);
        this.setState({ isVisible: entry.isIntersecting });
      });
    }, {});

    this.io.observe(this.container);
  }
  componentWillUnmount() {
    if (this.io) {
      this.io.disconnect();
    }
  }
  render() {
    console.log('Observer this.state.isVisible:', this.state.isVisible);
    return (
      // 这里也可以使用 findDOMNode 实现，但是不建议
      <div ref={div => {this.container = div}}>
        {
          Array.isArray(this.props.children)
          ?
            this.props.children.map(child => child(this.state.isVisible))
          :
            this.props.children(this.state.isVisible)
        }
      </div>
    );
  }
}

export default Observer;
