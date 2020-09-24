import React, { useContext } from "react";
import { SessionContext } from "stores/session";
import Block from "styledComps/block";
import Text from "styledComps/text";

const Index = () => {
  const {
    state: { loading, error },
  } = useContext(SessionContext);
  return (
    <>
      {(loading || error) && (
        <Block
          bc={loading ? "--orange" : "--authErrorBoxBC"}
          as="nav"
          jc="center"
          ai="center"
        >
          <Text pad="30px" size="4rem">
            {loading
              ? "Loading..."
              : "Error: Authentication failed. Please try again. (" +
                error +
                ")"}
          </Text>
        </Block>
      )}
    </>
  );
};

export default Index;
