import React, { Component } from "react";
import "./PostStyle.css";
export default class LinkPost extends Component {
  render() {
    return (
      <div className="LinkPost">
        <h4>
          <a href={this.props.post["link-url"]}>
            {this.props.post["link-text"]}
          </a>
        </h4>
        <div
          dangerouslySetInnerHTML={{
            __html: this.props.post["link-description"],
          }}
        ></div>
      </div>
    );
  }
}
