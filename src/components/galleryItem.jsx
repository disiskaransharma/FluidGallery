import React, { Component } from "react";
import TransitionAnim from "./transitionAnim";

class GalleryItem extends Component {
  state = {};
  render() {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 p-0">
        <TransitionAnim>
          <div
            style={{ backgroundImage: `url(${this.props.data.url})` }}
            className="col-12 item-wrapper"
            onClick={() => this.props.onClick(this.props.data)}
          >
            <h3 className="title">
              {this.getLabel()} {this.props.data.id}
            </h3>
            <p className="desc">{this.props.data.title}</p>
          </div>
        </TransitionAnim>
      </div>
    );
  }

  getLabel = () => {
    switch (this.props.data.albumId) {
      case 1:
        return "Image";
      case 2:
        return "Pix";
      case 3:
        return "Photo";
    }
  };
}

export default GalleryItem;
