import React, { Component } from "react";
import { MainContext } from "./MainContext";
import { MainX } from "../xBase/xBase";

class Provider extends Component {
  state = {
    user: {},
    dataIn: [],
    items: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(
      `https://raw.githubusercontent.com/NangoliJude/cartdata/master/data.json`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          dataIn: data
        });
      })
      .catch(error => console.log(error));
  };

  signedIn = () => {
    return this.state.user.uid;
  };

  signedOut = () => {
    this.setState({ user: {} });
  };

  handleAuth = user => {
    console.log(user);
    this.setState({
      user: user
    });
  };
  render() {
    return (
      <MainX>
        <MainContext.Provider
          value={{
            state: this.state,
            actions: {
              signedIn: this.signedIn,
              signedOut: this.signedOut,
              handleAuth: this.handleAuth
            }
          }}
        >
          {this.props.children}
        </MainContext.Provider>
      </MainX>
    );
  }
}

export { Provider };
