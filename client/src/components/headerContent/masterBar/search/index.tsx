import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Block from "styledComps/block";
import Text from "styledComps/text";
import * as Icon from "components/icons";

import "./index.scss";

interface IProps {}
const Search: React.FC<IProps> = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");
  const [cls, setCls] = useState("content");
  const _onFocus = (e: any) => {
    switch (e.type) {
      case "focus":
        setCls("content focusedInput");
        break;
      case "blur":
        setCls("content");
        break;
    }
  };
  const removeText = () => {
    setText("");
    if (ref.current !== null) {
      ref.current.focus();
    }
  };
  return (
    <Block className="searchContainer">
      <Block className={cls}>
        <Block ai="center" jc="space-between">
          <Icon.Search fill="var(--searchElements)" width="20" height="20" />
          <input
            type="text"
            ref={ref}
            onFocus={_onFocus}
            onBlur={_onFocus}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {text.length > 0 && (
            <Icon.Close
              onClick={removeText}
              fill="var(--searchElements)"
              width="14"
              height="14"
            />
          )}
        </Block>
        {text.length < 2 && (
          <Text
            pl="32px"
            pr="32px"
            pt="16px"
            size="--inputHelpText"
            clr="--inputHelpClr"
          >
            Aramaya başlamak için <Text wei="--w700">en az 2 karakter</Text>{" "}
            yazmalısınız
          </Text>
        )}
      </Block>
      <Block className="searchButton">
        <Text clr="--white" wei="--w700">
          ARA
        </Text>
      </Block>
    </Block>
  );
};

export default Search;
