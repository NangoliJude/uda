import React, { Component } from "react";

class ErrorBoundry extends Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null
  };
  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo
    });
  }
  render() {
    if (this.state.hasError) {
      return <p>Oppps! Error occured our engineers are working on it</p>;
    }
    return <div>{this.props.children}</div>;
  }
}
export default ErrorBoundry;
