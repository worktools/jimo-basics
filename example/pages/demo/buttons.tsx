import React, { FC } from "react";
import { css } from "@emotion/css";
import { DocDemo, DocBlock, DocSnippet } from "@worktools/doc-frame";
import { getLink } from "../../util/link";
import JimoButton from "../../../src/jimo-button";
import Space from "@worktools/flex-styles/lib/space";
import JimoLink from "../../../src/jimo-link";

let codeButton = `
<JimoButton text={"DEMO"} onClick={() => {}} />

<JimoButton text={"DEMO"} disabled onClick={() => {}} />
`;

let codeFilled = `
<JimoButton text={"DEMO"} fillColor onClick={() => {}} />
`;

let codePrepend = `
<JimoButton prepend={"+"} text={"DEMO"} fillColor onClick={() => {}} />
`;

let codeCanceling = `
<JimoButton text={"Cancel"} canceling onClick={() => {}} />
`;

let DemoButtons: FC<{}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocDemo title={"Basic button"} link={getLink("buttons.tsx")} className={styleDemo}>
        <DocSnippet code={codeButton} />
        <div>
          <JimoButton text={"DEMO"} onClick={null} data-action="demo action" />
          <Space width={8} />
          <JimoButton text={"DEMO"} onClick={() => {}} disabled />
        </div>
      </DocDemo>

      <DocDemo title={"Filled color"} link={getLink("buttons.tsx")} className={styleDemo}>
        <DocSnippet code={codeFilled} />
        <div>
          <JimoButton text={"DEMO"} fillColor onClick={() => {}} />
          <Space width={8} />
          <JimoButton text={"DEMO"} fillColor onClick={() => {}} disabled />
        </div>
      </DocDemo>

      <DocDemo title={"Cancel style"} link={getLink("buttons.tsx")} className={styleDemo}>
        <DocSnippet code={codeCanceling} />
        <div>
          <JimoButton text={"Cancel"} canceling onClick={() => {}} />
          <Space width={8} />
          <JimoButton text={"Cancel"} canceling disabled onClick={() => {}} />
        </div>
      </DocDemo>

      <DocDemo title={"Prepend something(probably icons)"} link={getLink("buttons.tsx")} className={styleDemo}>
        <DocSnippet code={codePrepend} />
        <JimoButton prepend={`+`} text={"DEMO"} fillColor onClick={() => {}} />
        <Space width={8} />
        <JimoButton prepend={`+`} text={"Cancel"} fillColor disabled onClick={() => {}} />
      </DocDemo>

      <DocDemo title={"Links as button"} className={styleDemo}>
        <DocSnippet code={codeLink} />

        <div>
          <JimoLink
            text="Open"
            onClick={() => {
              console.log("Clicked");
            }}
          />
          <Space width={8} />
          <JimoLink
            text="Confirm"
            data-action="confirm demo"
            onClick={() => {
              console.log("Clicked");
            }}
          />
        </div>
      </DocDemo>
    </div>
  );
});

export default DemoButtons;

let styleDemo = css``;

let codeLink = `<JimoLink text="Open" onClick={() => {}} />`;
