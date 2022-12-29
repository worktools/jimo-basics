import React, { FC } from "react";
import { css } from "@emotion/css";
import { DocDemo, DocBlock, DocSnippet } from "@worktools/doc-frame";
import ClampText from "../../../src/clamp-text";
import Space from "@worktools/flex-styles/lib/space";

let text =
  "As of right now, it's browser support. Line clamps are part of the CSS Overflow Module Level 3 which is currently in Editor's Draft and totally unsupported at the moment. 上海积梦智能科技有限公司， s为亟待升级改革的离散型制造业提供数字化工厂解决方案。积梦智能通过互联网和物联网技术，帮助企业快速建设自己的数字工厂，实现生产运营的可视化，驱动管理实时决策，助力企业提升运营效率，降低运营成本，从而获取更快的市场响应速度。 ";

let DemoClampText: FC<{}> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocDemo title={"Single line"}>
        <DocBlock content={contentInline} />
        <DocSnippet code={codeInline} />
        <div className={styleNarrow}>
          <ClampText text={text} />
        </div>
      </DocDemo>

      <DocDemo title={"multiple lines"}>
        <DocBlock content={contentMultilpeLines} />
        <DocSnippet code={code2Lines} />
        <div className={styleNarrow}>
          <ClampText lines={2} text={text} />

          <Space height={16} />
        </div>

        <Space height={16} />

        <DocSnippet code={code4Lines} />
        <div className={styleNarrow}>
          <ClampText lines={4} text={text} />
        </div>
      </DocDemo>

      <DocDemo title={"Empty text"}>
        <DocBlock content={empty} />
        <DocSnippet code={emptyCode} />
        <div>
          <ClampText text={""} />
        </div>
      </DocDemo>
    </div>
  );
});

export default DemoClampText;

let styleNarrow = css`
  width: 200px;
  border: 1px solid #eee;
`;

let contentInline = `
单行的文字用省略号隐藏超出宽度的部分. 注意这时用的标签是 div.
`;

let contentMultilpeLines = `
多行的文字省略通过私有属性 \`-webkit-line-clamp\` 来实现. 某些浏览器会存在兼容性问题. 具体具体参考 https://css-tricks.com/almanac/properties/l/line-clamp/ .
`;

let codeInline = `<ClampText text={text} />`;

let code2Lines = `<ClampText lines={2} text={text} />`;

let code4Lines = `<ClampText lines={4} text={text} />`;

let empty = `
\`text\` 传入空字符串时默认会显示 \`-\`. 默认的符号可以通过 \`emptySymbol\` 改写.
`;

let emptyCode = `
<ClampText text={""} />
`;
