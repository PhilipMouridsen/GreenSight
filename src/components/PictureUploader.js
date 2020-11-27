import React, { Component } from "react";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";
import "./userprofile.css";

class PictureUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      imagesArray: [props.philip, props.simona, props.ania],
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const imageMapper = this.state.imagesArray.map((image, index) => {
      return (
        <img src={image} onClick={() => this.props.handleImageChange(image)} />
      );
    });
    return (
      <div className="ProfilePicChanger">
        <Button id="uploadButton" type="primary" onClick={this.showModal}>
          Upload
        </Button>
        <Modal
          title="Change your profile pic!"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {imageMapper}
        </Modal>
      </div>
    );
  }
}
export default PictureUploader;
