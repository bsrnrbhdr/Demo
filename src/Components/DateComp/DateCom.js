import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./DateStyle.css";
export default class DateCom extends Component {
  render() {
    const dayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const monthNames = [
      "JAN",
      "FEB",
      "MARCH",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    const d = new Date(this.props.date);
    let day = dayNames[d.getDay()];
    let month = monthNames[d.getMonth()];
    let day2 = d.getUTCDate();
    return (
      <div>
        <Row>
          <Col className="day">
            <h3>
              <strong>{day}</strong>
            </h3>
          </Col>
          <Col className="month" xs={5}>
            <p>
              <strong>{month}</strong>
            </p>
            <p>
              <strong>{day2}</strong>
            </p>
          </Col>
        </Row>
      </div >
    );
  }
}
