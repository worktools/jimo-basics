import React, { FC } from "react";
import { css } from "@emotion/css";
import { DocDemo, DocBlock, DocSnippet } from "@worktools/doc-frame";
import ClampText from "../../../src/clamp-text";
import Space from "@worktools/flex-styles/lib/space";

let text =
  "As of right now, it's browser support. Line clamps are part of the CSS Overflow Module Level 3 which is currently in Editor's Draft and totally unsupported at the moment. 上海积梦智能科技有限公司， s为亟待升级改革的离散型制造业提供数字化工厂解决方案。积梦智能通过互联网和物联网技术，帮助企业快速建设自己的数字工厂，实现生产运营的可视化，驱动管理实时决策，助力企业提升运营效率，降低运营成本，从而获取更快的市场响应速度。 ";

let DemoTextTooltip: FC<{}> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocDemo title={"Tooltips"}>
        <DocBlock content={contentTooltip} />
        <DocSnippet code={codeTooltip} />
        <div className={styleNarrow}>
          <ClampText
            text={text}
            addTooltip
            onTextClick={() => {
              console.log("click on text");
            }}
          />
          <Space height={40} />
          <ClampText
            text={text}
            lines={2}
            addTooltip
            onTextClick={() => {
              console.log("click on text");
            }}
          />
          <Space height={40} />
          <ClampText
            text={"短就不显示"}
            addTooltip
            onTextClick={() => {
              console.log("click on text");
            }}
          />
        </div>
      </DocDemo>

      <DocDemo title="Delay">
        <DocBlock content={contentDelay} />
        <DocSnippet code={codeDelay} />
        <div className={styleNarrow}>
          <ClampText text={text} delay={800} addTooltip />
        </div>
        <Space height={40} />
      </DocDemo>

      <DocDemo title="对于包含节点样式的组件的 text 展示">
        <DocBlock content={contentRichText} />
        <DocSnippet code={codeRichText} lang="jsx" />
        <div className={styleNarrow}>
          <ClampText text={<a href="#">{text}</a>} tooltipText={text} addTooltip />
        </div>
        <Space height={40} />
      </DocDemo>

      <DocDemo title="Parent state">
        <DocBlock content={contentTooltipState} />
        <DocSnippet code={codeTooltipState} />
        <div className={styleNarrow}>
          <ClampText
            text={text}
            lines={2}
            onTooltipStateChange={(visible) => {
              console.log("Tooltip visible", visible);
            }}
          />
        </div>
      </DocDemo>
    </div>
  );
});

export default DemoTextTooltip;

let styleNarrow = css`
  width: 200px;
  border: 1px solid #eee;
`;

let contentTooltip = `有内容被省略的位置, 可以通过 \`addTooltip\` 属性控制显示完整内容`;

let codeTooltip = `<ClampText text={text} addTooltip />`;

let codeTooltipState = `
<ClampText
  text={text}
  lines={2}
  onTooltipStateChange={(visible) => {
    console.log("Tooltip visible", visible);
  }}
/>
`;

let contentTooltipState = `
通过 \`onTooltipStateChange\` 可以获取是否需要显示 Tooltip 这个状态.
`;

let contentDelay = `
\`delay\` 属性可以控制 Tooltip 打开关闭相对于鼠标进入离开的延时. 默认 160ms.
`;

let codeDelay = `
<ClampText text={text} delay={800} addTooltip />
`;

let codeRichText = `
 <ClampText text={<a href="#">{text}</a>} tooltipText={text} addTooltip />
`;

let contentRichText = `
如果 text 部分包含样式, 而现实的 tooltip 内部只需要纯文本, 那么需要设置 \`tooltipText\` 属性来指定纯文本的内容.
`;
