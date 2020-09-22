import React, { useState } from "react";
import Block from "styledComps/block";
import Text from "styledComps/text";
import SignIn from "./signIn";
import SignUp from "./signUp";
import { useHistory } from "react-router-dom";

import "./index.scss";

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);

  const history = useHistory();

  const _onClick = () => {
    history.push("/");
  };
  return (
    <Block col ai="center" bc="--primary" className="signPageContainer">
      <Block flex="1" bc="primary" pt="34px" pb="56px" jc="center">
        <Text
          as="button"
          clr="--orange"
          wei="--w700"
          size="2.8rem"
          onClick={_onClick}
        >
          hopsoborodo
        </Text>
      </Block>
      <Block className="formContainer">
        <Block className="buttons">
          <Text
            as="button"
            onClick={() => setIsLogin(true)}
            bc={isLogin ? "--white" : "--signButtons"}
          >
            Giriş yap
          </Text>
          <Text
            as="button"
            onClick={() => setIsLogin(false)}
            bc={isLogin ? "--signButtons" : "--white"}
          >
            Üye ol
          </Text>
        </Block>
        {isLogin ? <SignIn /> : <SignUp />}
      </Block>
    </Block>
  );
};

export default Index;
