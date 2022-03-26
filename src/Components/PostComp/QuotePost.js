import React, { Component } from "react";
import "./PostStyle.css";
export default class QuotePost extends Component {
  render() {
    return (
      <div className="QuotePost">
        <div className="QuotePostText">
          <h1>{this.props.post["quote-text"]}</h1>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: "— " +this.props.post["quote-source"],
          }}
        ></div>
      </div>
    );
  }
}
