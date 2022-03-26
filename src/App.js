import React, { Component } from "react";
import "./App.css";
import Post from "./Components/PostComp/Post";
import { Badge } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tumblelog: [],
      postsStart: [],
      postsTotal: [],
      postsType: [],
      posts: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data.json")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          tumblelog: json.tumblelog,
          postsStart: json["posts-start"],
          postsTotal: json["posts-total"],
          postsType: json["posts-type"],
          posts: json.posts,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1>Loading... </h1>
        </div>
      );

    return (
      <div className="App">
        <div className="Content">
          <div className="App-header">
            <strong>{this.state.tumblelog.title}</strong>
          </div>
          <div id="description">{this.state.tumblelog.description}</div>
          <div className="totalPostNumber">
            <Badge> TOTAL POST: {this.state.postsTotal}</Badge>
          </div>
          <Post posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default App;
