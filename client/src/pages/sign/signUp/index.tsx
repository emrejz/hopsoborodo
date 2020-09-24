import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Block from "styledComps/block";
import Text from "styledComps/text";
import * as Icon from "components/icons";
import SignInput from "../signInput";
import SignError from "../signError";
import { ESignButtonType } from "interfaces/index";
import { useMutation } from "@apollo/client";
import { createUser } from "graphql/user";
import { SessionContext } from "stores/session";

interface IProps {}

const Index: React.FC<IProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {
    state: { refetch },
  } = useContext(SessionContext);
  const history = useHistory();
  const [_createUser] = useMutation(createUser);

  const _onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const {
        data: {
          createUser: { token },
        },
      } = await _createUser({ variables: { username, password } });
      setLoading(false);
      localStorage.setItem("token", token);
      if (refetch) await refetch();
      history.push("/");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  const _disabled = (): boolean =>
    username.length < 3 || password.length < 3 || password !== cPassword;

  return (
    <Block as="form" col ai="center" bc="--primary" onSubmit={_onSubmit}>
      {error && <SignError error={error} setError={setError} />}
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
      <SignInput
        kind={ESignButtonType.cPassword}
        val={cPassword}
        setVal={setCPassword}
        samePassword={cPassword === password}
      />
      <Block
        as="button"
        className="submitButton"
        type="submit"
        disabled={_disabled()}
      >
        {loading ? <Icon.LoadingCircle /> : <Text>Üye ol</Text>}
      </Block>
    </Block>
  );
};

export default Index;
