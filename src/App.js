import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Provider, Main, LoginPage, Footer, MainContext } from "./Components";
import { Header } from "./Components/UI/Header";

class App extends Component {
  render() {
    return (
      <Provider>
        <MainContext.Consumer>
          {context => {
            const { signedIn } = context.actions;
            return (
              <React.Fragment>
                <Header />
                <Switch>{signedIn() ? <Main /> : <LoginPage />}</Switch>
                <Footer />
              </React.Fragment>
            );
          }}
        </MainContext.Consumer>
      </Provider>
    );
  }
}

export default App;
