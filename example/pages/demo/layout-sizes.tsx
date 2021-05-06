import React, { FC, ReactText, ReactElement } from "react";
import { css, cx } from "@emotion/css";
import { DocDemo } from "@worktools/doc-frame";
import { rowMiddle, Space, row, expand } from "@worktools/flex-styles";
import CopyCode from "./copy-code";
import { LayoutSizes } from "../../../src/layout-sizes";

let textSizes = [
  {
    title: "标题大小",
    value: LayoutSizes.titleSize,
    code: "LayoutSizes.titleSize",
  },
  {
    title: "标题行高",
    value: LayoutSizes.titleLineHeight,
    code: "LayoutSizes.titleLineHeight",
  },
  {
    title: "标题外边距",
    value: LayoutSizes.titleMargin,
    code: "LayoutSizes.titleMargin",
  },
  {
    title: "普通文字大小",
    value: LayoutSizes.textSize,
    code: "LayoutSizes.textSize",
  },
  {
    title: "普通文字行高",
    value: LayoutSizes.textLineHeight,
    code: "LayoutSizes.textLineHeight",
  },
];

let uiSizes = [
  {
    title: "线框常用内边距",
    value: LayoutSizes.boxPadding,
    code: "LayoutSizes.boxPadding",
  },
  {
    title: "(特定)footer 间距",
    value: LayoutSizes.footerButtonsSpace,
    code: "LayoutSizes.footerButtonsSpace",
  },
  {
    title: "元素 border 到另一个元素 border 间距",
    value: LayoutSizes.borderToBorderSpace,
    code: "LayoutSizes.borderToBorderSpace",
  },
  {
    title: "元素 border 到另一个块文字间距",
    value: LayoutSizes.borderToTextSpace,
    code: "LayoutSizes.borderToTextSpace",
  },
  {
    title: "文字到另一块文字间距",
    value: LayoutSizes.textToTextSpace,
    code: "LayoutSizes.textToTextSpace",
  },
  {
    title: "图标到紧随的文字",
    value: LayoutSizes.iconToTextSpace,
    code: "LayoutSizes.iconToTextSpace",
  },
];

let tableSizes = [
  {
    title: "目前只能大致约定, 以 40 为单位",
    value: "120px 160px 200px...",
    code: `n * LayoutSizes.tableColumnWidthUnit`,
  },
];

let formSizes = [
  {
    title: "label 区域默认宽度",
    value: LayoutSizes.labelAreaWidth,
    code: "LayoutSizes.labelAreaWidth",
  },
  {
    title: "input/textarea/select 常用的统一宽度",
    value: LayoutSizes.formControlAreaBaseWidth,
    code: "LayoutSizes.formControlAreaBaseWidth",
  },
  {
    title: "表单内上下内边距, 跟按钮之间的间距",
    value: LayoutSizes.formPaddingSpace,
    code: "LayoutSizes.formPaddingSpace",
  },
];

let listSizes = [
  {
    title: "List item 高度(含图标文字的情况)",
    value: LayoutSizes.listItemHeight,
    code: "LayoutSizes.listItemHeight",
  },
  {
    title: "List item 纵向内边距",
    value: LayoutSizes.lineItemPadding,
    code: "LayoutSizes.lineItemPadding",
  },
];

let DemoLayoutSizes: FC<{}> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */

  let renderLine = (x: { title: string; value: ReactText; code: ReactText }) => {
    return (
      <div className={cx(row, styleLine)}>
        <div className={cx(expand, styleIntro)}>{x.title}</div>
        <Space width={16} />
        <CopyCode code={`${x.value}`} />
        <CopyCode code={`${x.code}`} />
      </div>
    );
  };

  return (
    <div className={styleContainer}>
      <DocDemo className={styleDemo} title="文字大小行高">
        {textSizes.map((x) => {
          return renderLine(x);
        })}
      </DocDemo>
      <DocDemo className={styleDemo} title="页面布局常用尺寸">
        {uiSizes.map((x) => {
          return renderLine(x);
        })}
      </DocDemo>
      <DocDemo className={styleDemo} title="表格(Table)内布局相关">
        {tableSizes.map((x) => {
          return renderLine(x);
        })}
      </DocDemo>
      <DocDemo title="表单(Form)元素布局相关">
        {formSizes.map((x) => {
          return renderLine(x);
        })}
      </DocDemo>
      <DocDemo title=" 列表(List)局部相关">
        {listSizes.map((x) => {
          return renderLine(x);
        })}
      </DocDemo>
    </div>
  );
});

export default DemoLayoutSizes;

let styleIntro = css`
  font-size: 14px;
  line-height: 30px;
`;

let styleLine = css`
  padding: 4px 12px;

  :hover {
    background-color: hsla(0, 0%, 0%, 0.02);
  }
`;

let styleContainer = css`
  padding-bottom: 200px;
`;

let styleDemo = css`
  max-width: 100%;
`;
