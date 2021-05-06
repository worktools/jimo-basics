import React, { FC } from "react";
import { css, cx } from "@emotion/css";
import { row } from "@worktools/flex-styles";
import { GlobalThemeVariables } from "./theme";

let themeColor = "hsla(221, 100%, 61%, 1)";

export interface IJimoTabItem {
  key?: string;
  value: string;
  title: string;
  "data-entry"?: string;
}

/** 自定义 Tabs 组件, 选中时整个背景改变颜色 */
let JimoTabs: FC<{
  // 有需求的话可以支持更多的类型
  value: string;
  items: IJimoTabItem[];
  onClick: (value: IJimoTabItem) => void;
}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={cx(styleTabs, GlobalThemeVariables.tabs)}>
      {props.items.map((item, idx) => {
        return (
          <div
            key={item.key || item.title}
            onClick={() => props.onClick(item)}
            data-entry={item["data-entry"] || item.key || item.title}
            className={cx(
              styleTab,
              GlobalThemeVariables.tabItem,
              props.value === item.value ? cx(styleSelected, GlobalThemeVariables.tabSelected) : null,
              idx === 0 ? styleFirstTab : null,
              idx === props.items.length - 1 ? styleLastTab : null
            )}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
});

export default JimoTabs;

let styleTabs = css`
  display: inline-flex;
`;

let styleTab = css`
  transition-duration: 240ms;
  min-width: 72px;
  line-height: 26px;
  border: 1px solid rgba(232, 232, 232, 1);
  border-right: none;
  text-align: center;
  padding: 0 12px;
  color: hsla(0, 0%, 44%, 1);
  cursor: pointer;

  :hover {
    background-color: hsla(0, 0%, 98%, 1);
  }
`;

let styleSelected = css`
  background-color: ${themeColor};
  border-color: ${themeColor};
  color: white;

  :hover {
    background-color: ${themeColor};
  }
`;

let styleFirstTab = css`
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`;

let styleLastTab = css`
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-right: 1px solid rgba(232, 232, 232, 1);
`;
