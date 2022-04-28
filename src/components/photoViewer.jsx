import React, { Component } from "react";

class PhotoViewer extends Component {
  state = {
    currentImageId: this.props.currentId,
  };
  render() {
    const item = this.props.data.find((item) => {
      return item.id === this.state.currentImageId;
    });

    console.log(item);

    return (
      <div className="overlay">
        <div className="image-wrapper">
          <img className="view-img" src={this.getImage()} alt="" />
          <i
            onClick={this.props.onClose}
            className="fa fa-times ic-close"
            aria-hidden="true"
          ></i>
        </div>
        <i
          onClick={() => this.onArrowClick(0)}
          className="fa fa-caret-left ic-arrow left"
          aria-hidden="true"
        ></i>
        <i
          onClick={() => this.onArrowClick(1)}
          className="fa fa-caret-right ic-arrow right"
          aria-hidden="true"
        ></i>
      </div>
    );
  }

  getImage = () => {
    const item = this.props.data.find((item) => {
      return item.id === this.state.currentImageId;
    });
    return item.url;
  };

  onArrowClick = (flow) => {
    const index = this.props.data.findIndex((item) => {
      return item.id === this.state.currentImageId;
    });

    if (flow) {
      if (index === this.props.data.length - 1) {
        this.setState({ currentImageId: this.props.data[0].id });
      } else {
        this.setState({
          currentImageId: this.props.data[index + 1].id,
        });
      }
    } else {
      if (index === 0) {
        this.setState({
          currentImageId: this.props.data[this.props.data.length - 1].id,
        });
      } else {
        this.setState({
          currentImageId: this.props.data[index - 1].id,
        });
      }
    }
    return this.getImage();
  };
}

export default PhotoViewer;
