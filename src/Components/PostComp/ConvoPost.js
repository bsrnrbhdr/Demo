import React, { Component } from "react";
import "./PostStyle.css";
export default class ConvoPost extends Component {
  render() {
    return (
      <div className="ConvoPost">
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.post.conversation.map((convo, index) => (
              <tr key={index} >
                <td className="label">{convo.label} </td>
                <td> {convo.phrase}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
