import React from "react";
import { SectionX, Flex, Grid } from "./UI/inDesign";
import { ContainerA, ContainerB } from "./xBase/xBase";

import { ProductList } from "./ProductList";

const Main = () => {
  return (
    <SectionX>
      <ContainerB>
        <Flex>
          <Grid>ASAS</Grid>
        </Flex>
      </ContainerB>
      <ContainerA>
        <Flex>
          <Grid>
            <ProductList />
          </Grid>
        </Flex>
      </ContainerA>
    </SectionX>
  );
};

export { Main };
