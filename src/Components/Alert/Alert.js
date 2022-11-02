import React, { Component } from "react";

export class Alert extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { message, type = "info" } = this.props;
    return <div className={`alert alert-${type} text-center`}>{message}</div>;
  }
}

export default Alert;
