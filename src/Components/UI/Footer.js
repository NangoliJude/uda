import React, { Component } from "react";
import { sX } from "./inDesign";

class Footer extends Component {
  render() {
    return (
      <footer style={sX.footerStyle}>
        <div style={sX.navStyle}>
          <p style={sX.pStyle}> &copy; </p>

          <a to="/names">
            <div style={sX.rotate}>
              <div style={sX.xSone} />
              <div style={sX.xStwo} />
              <div style={sX.xSthree} />
              <div style={sX.xSfour} />
            </div>
          </a>
          <a style={sX.favStyle} to="/hi">
            {" "}
            Favourite Name{" "}
          </a>
          <a style={sX.favStyle} href="https://twitter.com/Jude_Li_Eric">
            Twiiter
          </a>
          <a style={sX.favStyle} to="/names">
            Support
          </a>
        </div>
      </footer>
    );
  }
}

export { Footer };
