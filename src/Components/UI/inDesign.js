import React from "react";
import { space, colors } from "./xS";

export const SectionX = ({ ...props }) => {
  const sx = {
    display: "flex"
  };
  return <section style={sx} {...props} />;
};
export const Flex = ({ ...props }) => {
  const sx = {
    display: "flex"
  };
  return <div {...props} style={sx} />;
};

export const Grid = ({ ...props }) => {
  const sx = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridGap: "10px",
    padding: "20px"
  };
  return <div style={sx} {...props} />;
};

export const Button = ({ ...props }) => {
  const sx = {
    fontFamily: "inherit",
    fontSize: "inherit",
    textDecoration: "none",
    display: "inline-block",
    margin: 0,
    paddingTop: space[1],
    paddingBottom: space[1],
    paddingLeft: space[2],
    paddingRight: space[2],
    border: 0,
    color: colors.white,
    background: colors.mainGreen,
    borderRadius: "5px",
    outline: "none",
    lineHeight: "15px"
  };
  return (
    <div>
      <button {...props} style={sx} />
    </div>
  );
};

export const InputX = ({ ...props }) => {
  const sx = {
    height: "auto",
    marginBottom: "10px",
    padding: "5px 5px",
    border: "1px solid #bbb",
    color: "#aaa",
    outline: space[0],
    minWidth: "200px",
    borderRadius: "5px",
    paddingLeft: "10px",
    display: "block",
    inlineHeight: "25px",
    fontSize: "15px",
    fontFamily: "Roboto",
    fontWeight: "700",
    letterSpacing: "0.1px"
  };
  return <input {...props} style={sx} />;
};

export const FormX = ({ ...props }) => {
  const sx = {
    position: "relative",
    maxWidth: "300px",
    padding: "19px 29px 29px",
    margin: "185px auto 20px",
    backgroundColor: "#fff",
    border: "1px solid #e5e5e5",
    borderRadius: "5px",
    boxShadow: "0px 1px 2px #BEBEBE"
  };
  return <form {...props} style={sx} />;
};

export const Span = ({ ...props }) => {
  const sx = {
    color: "red",
    marginLeft: "15px",
    marginTop: "7px",
    fontSize: "10px"
  };
  return (
    <span {...props} style={sx}>
      {props.children}
    </span>
  );
};

export const ThumbsUp = ({ ...props }) => {
  const sx = {
    color: colors.black,
    marginLeft: "15px",
    marginTop: "7px",
    fontSize: "15px"
  };
  return (
    <span {...props} style={sx}>
      {props.children}
    </span>
  );
};

export const IconXone = ({ ...props }) => {
  const sx = {
    xS: {
      rotateStyle: {
        transform: "rotate(90deg)",
        marginRight: "25px",
        marginTop: "auto",
        marginBottom: "auto"
      },
      xSone: {
        width: "20px",
        height: "2px",
        background: "black",
        margin: "3px 0px",
        borderRadius: "4px"
      },
      xStwo: {
        width: "30px",
        height: "2px",
        background: "black",
        margin: "3px 0px",
        borderRadius: "4px"
      },
      xSthree: {
        width: "30px",
        height: "2px",
        background: "black",
        margin: "3px 0px",
        borderRadius: "4px"
      },
      xSfour: {
        width: "15px",
        height: "2px",
        background: "black",
        margin: "0 5px",
        borderRadius: "4px"
      }
    }
  };
  return (
    <div {...props} style={sx.xS}>
      <div style={sx.xSone} />
      <div style={sx.xStwo} />
      haha
      <div style={sx.xSthree} />
      <div style={sx.xSfour} />
    </div>
  );
};

export const sX = {
  footerStyle: {
    backgroundColor: "#fafafa",
    width: "100%",
    height: "50px",
    bottom: 0,
    position: "fixed",
    color: "black"
  },
  navStyle: {
    marginTop: "15px",
    marginLeft: "50px",
    marginRight: "auto",
    display: "flex",
    fontWeight: "300",
    fontSize: "12px",
    color: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  xSone: {
    width: "20px",
    height: "2px",
    background: "black",
    margin: "3px 0px",
    borderRadius: "4px"
  },
  xStwo: {
    width: "30px",
    height: "2px",
    background: "black",
    margin: "3px 0px",
    borderRadius: "4px"
  },
  xSthree: {
    width: "30px",
    height: "2px",
    background: "black",
    margin: "3px 0px",
    borderRadius: "4px"
  },
  xSfour: {
    width: "15px",
    height: "2px",
    background: "black",
    margin: "0 5px",
    borderRadius: "4px"
  },
  rotate: {
    transform: "rotate(90deg)",
    marginRight: "25px",
    marginTop: "auto",
    marginBottom: "auto"
  },
  favStyle: {
    fontWeight: "300",
    fontSize: "12px",
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: "25px",
    textDecoration: "none",
    color: "black"
  },
  pStyle: {
    marginRight: "25px",
    marginTop: "auto",
    marginBottom: "auto",
    fontWeight: "300",
    fontSize: "12px"
  }
};
