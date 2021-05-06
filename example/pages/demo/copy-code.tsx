import React, { FC, useState } from "react";
import { css, cx } from "@emotion/css";
import { DocDemo } from "@worktools/doc-frame";
import { ColorScheme } from "../../../src/color-scheme";
import { row, rowMiddle, center, Space } from "@worktools/flex-styles";
import copy from "copy-to-clipboard";

let CopyCode: FC<{ code: string }> = React.memo((props) => {
  let [copied, setCopied] = useState(false);

  return (
    <div
      className={styleCopy}
      onClick={() => {
        setCopied(true);
        copy(props.code);
        setTimeout(() => {
          setCopied(false);
        }, 600);
      }}
    >
      {props.code}
      {copied ? <div className={styleCopied}>Copied</div> : null}
    </div>
  );
});

export default CopyCode;

let styleCopy = css`
  font-size: 12px;
  width: 200px;
  cursor: pointer;
  color: ${ColorScheme.font.secondary};
  position: relative;
  white-space: pre;

  :hover {
    color: ${ColorScheme.font.hoverLink};
  }
`;

let styleCopied = css`
  position: absolute;
  top: 0;
  background-color: hsla(0, 0%, 100%, 0.9);
  padding: 4px 8px;
`;
