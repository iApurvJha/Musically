import React, { Component, useState } from "react";
import '../App.css'
import { cloudinary_preset } from "../preset";

class CloudinaryUploadWidget extends Component {
  componentDidMount(props) {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dulpfkxni",
        uploadPreset: cloudinary_preset,
        sources:["local"]
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the song info: ", result.info);
          this.props.setTrack(result.info.secure_url);
          this.props.setFilename(result.info.original_filename)
          

        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (
      <button id="upload_widget" className="cloudinartWidgetButton">
        {this.props.filename?`${this.props.filename.substring(0,11)}...`:"Upload Track"}
      </button>
    );
  }
}

export default CloudinaryUploadWidget;