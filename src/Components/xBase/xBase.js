import React from "react";
import "./xBase.css";

const MainX = ({ ...props }) => {
  return (
    <main {...props} className="main">
      {props.children}
    </main>
  );
};

export { MainX };

const SectionA = ({ ...props }) => {
  return (
    <div {...props} className="sectionA">
      {props.children}
    </div>
  );
};

export { SectionA };

const SectionB = ({ ...props }) => {
  return (
    <div {...props} className="sectionB">
      {props.children}
    </div>
  );
};

export { SectionB };

const Hide = ({ ...props }) => {
  return (
    <div {...props} className="hide">
      {props.children}
    </div>
  );
};

export { Hide };

const ContainerA = ({ ...props }) => {
  return (
    <div {...props} className="containerA">
      {props.children}
    </div>
  );
};

export { ContainerA };

const ContainerB = ({ ...props }) => {
  return (
    <div {...props} className="containerB ">
      {props.children}
    </div>
  );
};

export { ContainerB };

const Spinner = ({ ...props }) => {
  return (
    <div {...props} className="loader">
      {props.children}
    </div>
  );
};

export { Spinner };
