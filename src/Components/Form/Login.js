import React from "react";
import Form from "./Form";
import { FormX, InputX, Button, Span, ThumbsUp, Flex } from "../UI/inDesign";
import FadeIn from "../xLib/FadeIn";

const Login = () => {
  return (
    <Form userData={{ email: "", password: "" }}>
      {(data, handleData, validateForm, dataType, handleType, handleAuth) => {
        const handleSubmit = e => {
          e.preventDefault();
          handleAuth({
            uid: "174586795664",
            email: data.email,
            password: data.password
          });
        };
        return (
          <FormX onSubmit={handleSubmit}>
            <div>
              <InputX
                name="email"
                type="text"
                value={data.email}
                onChange={handleData}
                placeholder="Email"
              />
            </div>

            <Flex>
              <InputX
                name="password"
                type={dataType}
                value={data.password}
                onChange={handleData}
                placeholder="Password"
              />
              <Span onClick={handleType}>
                <i className="fas fa-eye" />
              </Span>
            </Flex>

            <Flex>
              <Button disabled={!validateForm()} type="submit">
                Login
              </Button>

              {data.password.length > 1 && data.email ? (
                <ThumbsUp>
                  <FadeIn>
                    <i className="fas fa-thumbs-up" />
                  </FadeIn>
                </ThumbsUp>
              ) : null}
            </Flex>
          </FormX>
        );
      }}
    </Form>
  );
};

export { Login };
