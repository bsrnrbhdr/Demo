import React, { Component } from "react";
import "./PostStyle.css";
export default class RegularPost extends Component {
  render() {
    return (
      <div className="RegularPost">
        <h6>{this.props.post["regular-title"]}</h6>
        <div
          dangerouslySetInnerHTML={{ __html: this.props.post["regular-body"] }}
        ></div>
      </div>
    );
  }
}
