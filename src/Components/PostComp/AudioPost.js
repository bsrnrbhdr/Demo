import React, { Component } from "react";
import "./PostStyle.css";
export default class AudioPost extends Component {
  render() {
    return (
      <div className="AudioPost">
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: this.props.post["audio-embed"] }}
          ></div>
          <div
            dangerouslySetInnerHTML={{
              __html: this.props.post["audio-caption"],
            }}
          ></div>
        </div>
        
      </div>
    );
  }
}
