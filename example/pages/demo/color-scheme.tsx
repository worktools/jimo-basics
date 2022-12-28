import React, { FC, useState } from "react";
import { css, cx } from "@emotion/css";
import { DocDemo } from "@worktools/doc-frame";
import { ColorScheme } from "../../../src/color-scheme";
import { row, rowMiddle, center, expand } from "@worktools/flex-styles";
import Space from "@worktools/flex-styles/lib/space";
import CopyCode from "./copy-code";

let mainColors = [
  {
    color: ColorScheme.indigo,
    copy: "ColorScheme.indigo",
    intro: "顶部栏主视觉配色，顶部栏背景色",
  },
  {
    color: ColorScheme.theme,
    copy: "ColorScheme.blue",
    intro: "内容区域主视觉配色，正常、进行中颜色（主题色）",
  },
  {
    color: ColorScheme.yellow,
    copy: "ColorScheme.yellow",
    intro: "收藏选中色",
  },
  {
    color: ColorScheme.red,
    copy: "ColorScheme.red",
    intro: "已拒绝颜色、被禁用颜色",
  },
  {
    color: ColorScheme.green,
    copy: "ColorScheme.green",
    intro: "正常、进行中颜色",
  },
  {
    color: ColorScheme.grey,
    copy: "ColorScheme.grey",
    intro: "正常、进行中颜色",
  },
];

let borderColors = [
  {
    color: ColorScheme.border.main,
    copy: "ColorScheme.border.main",
    intro: "边框颜色",
  },
  {
    color: ColorScheme.border.divider,
    copy: "ColorScheme.border.divider",
    intro: "分割线颜色",
  },
  {
    color: ColorScheme.border.hover,
    copy: "ColorScheme.border.hover",
    intro: "边框 hover 颜色(一些场景会加阴影 2px hsla(223, 93%, 35%, 0.3))",
  },
  {
    color: ColorScheme.border.highlight,
    copy: "ColorScheme.border.highlight",
    intro: "边框高亮颜色颜色",
  },
];

let fontColors = [
  {
    color: ColorScheme.font.main,
    copy: "ColorScheme.font.main",
    intro: "文字主色",
  },
  {
    color: ColorScheme.font.title,
    copy: "ColorScheme.font.title",
    intro: "弹窗内标题文字、内容区域标题文字",
  },
  {
    color: ColorScheme.font.tableContent,
    copy: "ColorScheme.font.tableContent",
    intro: "表格内文字",
  },
  {
    color: ColorScheme.font.label,
    copy: "ColorScheme.font.label",
    intro: "label文字颜色，左边导航栏未选中文字文案颜色",
  },
  {
    color: ColorScheme.font.secondary,
    copy: "ColorScheme.font.secondary",
    intro: "内容区域文字、输入框内文字、面包屑除最后一级文字颜色",
  },
  {
    color: ColorScheme.font.placeholder,
    copy: "ColorScheme.font.placeholder",
    intro: "内容区域文字、输入框内文字、面包屑除最后一级文字颜色",
  },
  {
    color: ColorScheme.font.link,
    copy: "ColorScheme.font.link",
    intro: "文案选中颜色",
  },
  {
    color: ColorScheme.font.hoverLink,
    copy: "ColorScheme.font.hoverLink",
    intro: "文案选中颜色",
  },
  {
    color: ColorScheme.font.activeLink,
    copy: "ColorScheme.font.activeLink",
    intro: "点击瞬间颜色",
  },
];

let DemoColorScheme: FC<{}> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */

  let renderColor = (color: string, intro: string) => {
    return (
      <div key={color} className={rowMiddle}>
        <div className={cx(center, styleColor)} style={{ backgroundColor: color }}>
          {color}
        </div>
        <Space width={16} />
        <div style={{ color: color }} className={styleText}>
          {color}
        </div>
        <Space width={16} />
        <div className={styleIntro}>{intro}</div>
      </div>
    );
  };

  return (
    <div className={styleContainer}>
      <DocDemo title="主色" className={styleDemo}>
        {mainColors.map((theme) => {
          let { color, intro } = theme;
          return (
            <div key={color} className={cx(rowMiddle, styleCase)}>
              <div className={cx(center, styleColor)} style={{ backgroundColor: color }}>
                {color}
              </div>
              <Space width={16} />
              <div style={{ color: color }} className={styleText}>
                {color}
              </div>
              <Space width={16} />
              <CopyCode code={theme.copy} />
              <Space width={16} />
              <div className={cx(expand, styleIntro)}>{intro}</div>
            </div>
          );
        })}
      </DocDemo>
      <DocDemo title="文字颜色" className={styleDemo}>
        {fontColors.map((theme) => {
          let { color, intro } = theme;
          return (
            <div key={color} className={cx(rowMiddle, styleCase)}>
              <div style={{ color: color }} className={styleText}>
                {color}
              </div>
              <Space width={16} />
              <CopyCode code={theme.copy} />
              <Space width={16} />
              <div className={cx(expand, styleIntro)} style={{ color: color }}>
                {intro}
              </div>
            </div>
          );
        })}
      </DocDemo>
      <DocDemo title="边框颜色" className={styleDemo}>
        {borderColors.map((theme) => {
          let { color, intro } = theme;
          return (
            <div key={color} className={cx(rowMiddle, styleCase)}>
              <div className={cx(center, styleBorders)} style={{ borderColor: color }}>
                {color}
              </div>
              <Space width={16} />
              <CopyCode code={theme.copy} />
              <Space width={16} />
              <div style={{ borderColor: color }} className={styleUnderline}></div>
              <Space width={16} />
              <div className={cx(expand, styleIntro)}>{intro}</div>
            </div>
          );
        })}
      </DocDemo>
    </div>
  );
});

export default DemoColorScheme;

let styleColor = css`
  width: 200px;
  height: 40px;
  color: white;
  font-size: 13px;
`;

let styleText = css`
  width: 200px;
  text-align: center;
  font-size: 14px;
`;

let styleIntro = css`
  font-size: 14px;
`;

let styleCase = css`
  line-height: 32px;
`;

let styleBorders = css`
  border: 1px solid white;
  margin: 8px;
  min-width: 200px;
  font-size: 13px;
  color: ${ColorScheme.font.secondary};
`;

let styleUnderline = css`
  border-style: solid;
  border-width: 0 0 1px 0;
  width: 200px;
`;

let styleContainer = css`
  padding-bottom: 200px;
`;

let styleDemo = css`
  max-width: 100%;
`;
