import React from 'react';

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = { hasBeenVisible: false };
  }
  componentDidMount() {
    console.log('componentDidMount Gallery isVisible:', this.props.isVisible)
    if (this.props.isVisible) {
      this.setState({ hasBeenVisible: true });
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps Gallery isVisible:', nextProps)
    if (!this.state.hasBeenVisible && nextProps.isVisible) {
      this.setState({ hasBeenVisible: true });
    }
  }
  render() {
    return (
      <div>
        <h1>Some pictures</h1>
        <h4>Picture 1</h4>
        {
          this.state.hasBeenVisible
          ?
            <img
              src="https://www.bianlifeng.com/topic/images/art1/upload-ueditor-image-20171117-1510895573435039667.jpg"
              width="675"
              height="1012"
            />
          :
            <div className="placeholder" />
        }
        <h4>Picture 2</h4>
        {
          this.state.hasBeenVisible
          ?
            <img
              src="https://www.bianlifeng.com/topic/images/art1/upload-ueditor-image-20171117-1510895572524056940.jpg"
              width="675"
              height="450"
            />
          :
          <div className="placeholder" />
        }
      </div>
    );
  }
}

export default Gallery;
