import React from "react";
import { MainContext } from "./Context/MainContext";
import { Product } from "./Product";

const ProductList = () => {
  return (
    <MainContext.Consumer>
      {context => {
        const Spinner = <p>Loading...!!!</p>;
        const { dataIn } = context.state;
        const productIn = dataIn.map(data => {
          return (
            <div key={data.name}>
              <Product data={data} />
            </div>
          );
        });
        return (
          <React.Fragment>
            {dataIn.length === 0 ? Spinner : productIn}
          </React.Fragment>
        );
      }}
    </MainContext.Consumer>
  );
};

export { ProductList };
