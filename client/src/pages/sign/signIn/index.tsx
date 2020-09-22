import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Block from "styledComps/block";
import Text from "styledComps/text";
import * as Icon from "components/icons";
import SignInput from "../signInput";
import SignError from "../signError";
import { ESignButtonType } from "interfaces/index";
import { useLazyQuery } from "@apollo/client";
import { loginUser } from "graphql/user";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const history = useHistory();
  const [_loginUser, { data, loading, error }] = useLazyQuery(loginUser);
  useEffect(() => {
    if (error && error.message) setErr(error.message);
    if (loading) setErr("");
    if (data) {
      localStorage.setItem("token", data.loginUser.token);
      history.push("/");
    }
  }, [data, error, loading]);
  const _onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    _loginUser({ variables: { username, password } });
  };
  const _disabled = (): boolean => username.length < 3 || password.length < 3;

  return (
    <Block as="form" col ai="center" bc="--primary" onSubmit={_onSubmit}>
      {err && <SignError error={err} setError={setErr} />}
      <SignInput
        kind={ESignButtonType.username}
        val={username}
        setVal={setUsername}
      />
      <SignInput
        kind={ESignButtonType.password}
        val={password}
        setVal={setPassword}
      />
      <Block
        as="button"
        className="submitButton"
        type="submit"
        disabled={_disabled()}
      >
        {loading ? <Icon.LoadingCircle /> : <Text>Giriş yap</Text>}
      </Block>
    </Block>
  );
};

export default Index;
