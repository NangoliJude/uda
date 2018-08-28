import React from "react";
import { NavLink } from "react-router-dom";
import { MainContext } from "../Context/MainContext";

const Header = () => {
  return (
    <header>
      <MainContext.Consumer>
        {context => {
          const { signedOut } = context.actions;
          return (
            <nav>
              <NavLink to="/">
                <b>FLIXIO</b>
              </NavLink>
              <ul>
                <li>
                  <NavLink style={{ color: "red" }} to="/login">
                    <p onClick={signedOut}>Sign Out</p>
                  </NavLink>
                </li>
              </ul>
            </nav>
          );
        }}
      </MainContext.Consumer>
    </header>
  );
};

export { Header };
