import React, { FC, useState } from "react";
import { css } from "@emotion/css";
import { DocDemo, DocSnippet } from "@worktools/doc-frame";
import LoadingIndicator from "../../../src/loading-indicator";
import LoadingArea from "../../../src/loading-area";
import { Space } from "@worktools/flex-styles";
import JimoButton from "../../../src/jimo-button";

let code = `
<LoadingIndicator />
`;

let codeArea = `
<LoadingArea isLoading={isLoading}>
  <div className={styleChild}>Children</div>
</LoadingArea>
`;

let DemoLoadingIndicator: FC<{}> = React.memo((props) => {
  let [isLoading, setLoading] = useState(false);
  let [antdStyle, setAntdStyle] = useState(false);

  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocDemo title={"Loading Indicator"}>
        <LoadingIndicator />
        <DocSnippet code={code} />
      </DocDemo>

      <DocDemo title={"Loading Area"}>
        <div>
          <JimoButton
            text={"Toggle"}
            className={styleLink}
            onClick={() => {
              setLoading(!isLoading);
            }}
          />
          <Space width={8} />
          <JimoButton
            text={"Antd"}
            className={styleLink}
            onClick={() => {
              setAntdStyle(!antdStyle);
            }}
          />
        </div>
        <Space height={16} />
        <LoadingArea isLoading={isLoading} antdStyle={antdStyle}>
          <div className={styleChild}>Children</div>
        </LoadingArea>

        <DocSnippet code={codeArea} />
      </DocDemo>

      <DocDemo title="Antd Style">
        <LoadingIndicator antdStyle />
      </DocDemo>
    </div>
  );
});

export default DemoLoadingIndicator;

let styleChild = css`
  width: 200px;
  height: 200px;
  background-color: #aaf;
  padding: 8px;
  color: white;
`;

let styleLink = css`
  cursor: pointer;
`;
