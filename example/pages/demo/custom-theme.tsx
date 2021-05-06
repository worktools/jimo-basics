import React, { FC } from "react";
import { css } from "@emotion/css";
import { DocDemo, DocBlock, DocSnippet } from "@worktools/doc-frame";
import JimoButton from "../../../src/jimo-button";
import { attachJimoBasicsThemeVariables } from "../../../src/theme";

let DemoCustomTheme: FC<{ className?: string }> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={props.className}>
      <DocDemo title="定制主题">
        <JimoButton
          text="使用深色主题"
          onClick={() => {
            attachJimoBasicsThemeVariables({
              link: styleDarkLink,
              underlineTabs: styleDarkUnderlineTabs,
              underlineTabItem: styleDarkUnderlineTabItem,
              buttonCanceling: styleDarkCancelButton,
            });

            alert("切换到其他页面查看");
          }}
        />

        <DocBlock content={content} />

        <DocSnippet code={code} />
      </DocDemo>
    </div>
  );
});

export default DemoCustomTheme;

let code = `
attachJimoBasicsThemeVariables({
  // link
  link: emptyStyle,

  // buttons
  buttonBase: emptyStyle,
  buttonFilled: emptyStyle,
  buttonCanceling: emptyStyle,
  buttonDisabled: emptyStyle,
  buttonBordered: emptyStyle,

  // tabs, 目前很少使用
  tabs: emptyStyle,
  tabItem: emptyStyle,
  tabSelected: emptyStyle,

  // underline tabs, 目前常用的版本
  underlineTabs: emptyStyle,
  underlineTabItem: emptyStyle,
  underlineTabSelected: emptyStyle,

  // loading area
  loadingArea: emptyStyle,
  loadingAreaCover: emptyStyle,
  loadingAreaIndicator: emptyStyle,
});
`;

let content = `
自定义主题
`;

let styleDarkLink = css`
  color: hsl(0, 0%, 60%);
`;

let styleDarkUnderlineTabItem = css`
  /* border-color: hsl(0, 0%, 60%); */
`;

let styleDarkUnderlineTabs = css`
  border-color: hsl(0, 0%, 60%);
`;

let styleDarkCancelButton = css`
  border-color: hsl(0, 0%, 60%);
`;
