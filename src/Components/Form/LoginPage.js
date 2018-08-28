import React from "react";
import { SectionX } from "../UI/inDesign";
import { SectionA, SectionB, Hide } from "../xBase/xBase";
import { Login } from "./Login";
import { ImagePage } from "../UI/ImagePage";

const LoginPage = () => {
  return (
    <SectionX style={{ backgroundColor: "white" }}>
      <SectionA>
        <Login />
      </SectionA>
      <SectionB>
        <Hide>
          <ImagePage />
        </Hide>
      </SectionB>
    </SectionX>
  );
};

export { LoginPage };
