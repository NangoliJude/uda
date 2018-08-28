import React from "react";

const pic =
  "https://3.bp.blogspot.com/-PbBN_aja450/W1i6yzL6EjI/AAAAAAAAAzI/veiqHoYx5n0ffK1P2YfddpQZs6fyuj4FgCLcBGAs/s1600/loga.png";
const ImagePage = () => {
  return (
    <div
      style={{
        backgroundColor: "#b2f6fe",
        height: "100vh"
      }}
    >
      <img src={pic} alt="Jude" style={{ marginTop: "140px" }} />
    </div>
  );
};

export { ImagePage };
