import React, { FC, useState } from "react";
import { css } from "@emotion/css";
import { DocDemo, DocSnippet } from "@worktools/doc-frame";
import { getLink } from "util/link";
import JimoTabs, { IJimoTabItem } from "../../../src/jimo-tabs";
import UnderlineTabs from "../../../src/underline-tabs";

let items: IJimoTabItem[] = [
  { title: "数据 A", value: "a" },
  { title: "数据 This is b", value: "b" },
  { title: "数据 c", value: "c" },
];

let codeTabs = `
let items: IJimoTabItem[] = [
  { title: "数据 A", value: "a" },
  { title: "数据 This is b", value: "b" },
  { title: "数据 c", value: "c" },
];

<JimoTabs
  items={items}
  value={tab}
  onClick={(value) => {
    setTab(value.value);
  }}
/>
`;

let codeUnderlineTabs = `
<UnderlineTabs
  items={items}
  value={tab}
  onClick={(value) => {
    setTab(value.value);
  }}
/>
`;

let DemoTabs: FC<{}> = React.memo((props) => {
  let [tab, setTab] = useState(null as string);

  /** Methods */
  /** Effects */
  /** Renderers */

  return (
    <div>
      <DocDemo title="Tabs" link={getLink("tabs.tsx")}>
        <JimoTabs
          items={items}
          value={tab}
          onClick={(value) => {
            setTab(value.value);
          }}
        />
        <DocSnippet code={codeTabs} />
      </DocDemo>

      <DocDemo title="Tabs" link={getLink("tabs.tsx")}>
        <UnderlineTabs
          items={items}
          value={tab}
          onClick={(value) => {
            setTab(value.value);
          }}
        />
        <DocSnippet code={codeUnderlineTabs} />
      </DocDemo>
    </div>
  );
});

export default DemoTabs;
