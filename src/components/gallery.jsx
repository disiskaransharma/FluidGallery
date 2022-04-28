import React, { Component } from "react";
import GalleryItem from "./galleryItem";
import PhotoViewer from "./photoViewer";
import { useParams } from "react-router-dom";
import axios from "axios";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Gallery extends Component {
  state = {
    images: [],
    showViewer: false,
    currentId: 1,
    albumId: 0,
  };

  async componentDidMount() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    this.setState({ images: data });
  }

  render() {
    this.state.albumId = this.props.params.id;
    const imgs = this.getImages();

    return (
      <div className="row m-0">
        {imgs.map((item) => (
          <GalleryItem
            key={item.id}
            data={item}
            onClick={this.handleImageClick}
          />
        ))}
        {this.state.showViewer && (
          <PhotoViewer
            data={imgs}
            currentId={this.state.currentId}
            onClose={this.closeViewer}
          />
        )}
      </div>
    );
  }

  handleImageClick = (item) => {
    this.setState({ showViewer: true, currentId: item.id });
  };

  closeViewer = () => {
    this.setState({ showViewer: false });
  };

  getImages = () => {
    return this.state.images.filter((i) => {
      if (i.albumId == this.state.albumId) {
        return i;
      }
    });
  };
}

export default withParams(Gallery);
