import React from "react";

const Product = ({ data }) => {
  const sx = {
    backgroundImage: `url(${data.imageUrl})`,
    height: "200px",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
  return (
    <div style={{ boxShadow: "0px 1px 2px #BEBEBE" }}>
      <div style={sx} />
      <p>{data.name}</p>
      <i className="far fa-heart" />
    </div>
  );
};

export { Product };
