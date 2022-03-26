import React, { Component } from "react";
import "./PostStyle.css";
export default class PhotoPost extends Component {
  render() {
    return (
      <div className="PhotoPost">
        <img
          style={{
            width: "350px",
            height: "250px",
          }}
          src={this.props.post["photo-url-1280"]}
        ></img>
           <div
          dangerouslySetInnerHTML={{ __html: this.props.post["photo-caption"] }}
        ></div>
      </div>
    );
  }
}
