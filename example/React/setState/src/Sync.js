import React from 'react';

class Sync extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.onClick = this.onClick.bind(this);
    this.onClickLater = this.onClickLater.bind(this);
  }

  componentDidMount() {
    this.onClick();
    document.querySelector('#btn-raw').addEventListener('click', this.onClick);
  }

  onClickLater() {
    setTimeout(() => {
      this.onClick();
    });
  }

  onClick() {
    this.setState({count: this.state.count + 1});
    console.log('# this.state', this.state);
  }

  render() {
    console.log('#enter render');
    return (
      <div>
        <div>{this.state.count}
          <button onClick={this.onClick}>Increment</button>
          <button id="btn-raw">Increment Raw</button>
          <button onClick={this.onClickLater}>Increment Later</button>
        </div>
      </div>
    )

  }
}

export default Sync;
