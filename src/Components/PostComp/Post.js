import React, { Component } from "react";
import { Button, Row, Col, Modal, ModalHeader, ModalBody } from "reactstrap";
import "./PostStyle.css";
import DateCom from "../DateComp/DateCom";
import QuotePost from "./QuotePost";
import PhotoPost from "./PhotoPost";
import ConvoPost from "./ConvoPost";
import LinkPost from "./LinkPost";
import RegularPost from "./RegularPost";
import AudioPost from "./AudioPost";
export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  handleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const element = (post) => {
      switch (post.type) {
        case "quote":
          return <QuotePost post={post} />;
        case "photo":
          return <PhotoPost post={post} />;
        case "link":
          return <LinkPost post={post} />;
        case "conversation":
          return <ConvoPost post={post} />;
        case "audio":
          return <AudioPost post={post} />;
        case "regular":
          return <RegularPost post={post} />;

        default:
          return <div></div>;
      }
    };
    return (
      <div>
        {this.props.posts.map((post) => (
          <div className="post">
            <Row key={post.id}>
              <Col className="date" xs={3}>
                <DateCom date={post.date} />
              </Col>
              <Col className="postContent" xs={8}>
                {element(post)}
              </Col>
              <Col xs={1}>
                <Button
                  variant="primary"
                  onClick={() => window.open(post.url, "_blank")}
                ></Button>
              </Col>
            </Row>
          </div>
        ))}
      </div>
    );
  }
}
