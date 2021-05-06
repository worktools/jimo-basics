import React, { FC, CSSProperties } from "react";
import { css, cx } from "@emotion/css";
import { row } from "@worktools/flex-styles";
import { IJimoTabItem } from "./jimo-tabs";
import { GlobalThemeVariables } from "./theme";

let themeColor = "hsla(221, 100%, 61%, 1)";

/** 自定义 Tabs 组件, 选中时下划线颜色高亮 */
export let UnderlineTabs: FC<{
  // 有需求的话可以支持更多的类型
  value: string;
  items: IJimoTabItem[];
  onClick: (value: IJimoTabItem) => void;
  className?: string;
  style?: CSSProperties;
}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={cx(row, styleUnderlineTabs, GlobalThemeVariables.underlineTabs, props.className)} style={props.style}>
      {props.items.map((item) => {
        return (
          <div
            key={item.key || item.title}
            onClick={() => props.onClick(item)}
            className={cx(
              styleUnderlineTab,
              GlobalThemeVariables.underlineTabItem,
              props.value === item.value ? cx(styleSelectedUnderline, GlobalThemeVariables.underlineTabSelected) : null
            )}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
});

export default UnderlineTabs;

let styleUnderlineTabs = css`
  padding: 0px 16px;
  margin: 8px 0;
  border-bottom: 1px solid rgba(232, 232, 232, 1);
`;

let styleUnderlineTab = css`
  font-size: 14px;
  color: hsla(0, 0%, 59%, 1);
  border-bottom: 2px solid white;
  cursor: pointer;
  margin-right: 4px;
  transition-duration: 240ms;
  line-height: 28px;
  min-width: 20px;
  text-align: center;
  margin-right: 24px;

  :hover {
    background-color: hsla(0, 0%, 98%, 1);
  }
`;

let styleSelectedUnderline = css`
  border-bottom: 2px solid ${themeColor};
  color: ${themeColor};
`;
