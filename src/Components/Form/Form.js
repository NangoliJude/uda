import React, { Component } from "react";
import { MainContext } from "../Context/MainContext";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.userData,
      dataType: "password"
    };
  }

  handleData = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  validateForm = () => {
    return (
      this.state.data.email.length > 0 && this.state.data.password.length > 0
    );
  };

  handleType = e => {
    this.setState({
      dataType: this.state.dataType === "text" ? "password" : "text"
    });
  };

  render() {
    const { data, dataType } = this.state;
    const { children } = this.props;
    const { handleData, validateForm, handleType } = this;
    return (
      <MainContext.Consumer>
        {context => {
          const { handleAuth } = context.actions;
          return children(
            data,
            handleData,
            validateForm,
            dataType,
            handleType,
            handleAuth
          );
        }}
      </MainContext.Consumer>
    );
  }
}

export default Form;
