import React, { FC } from "react";
import { css } from "@emotion/css";
import { useTooltip } from "../../../src/tooltip";
import { DocDemo, DocSnippet, DocBlock } from "@worktools/doc-frame";
import JimoButton from "../../../src/jimo-button";
import { Space } from "@worktools/flex-styles";
import TooltipWrapper from "../../../src/tooltip-wrapper";

let DemoTooltipWrapper: FC<{ className?: string }> = React.memo((props) => {
  /** Plugins */

  let tooltipPlugin = useTooltip({
    text: text,
  });

  let nextTooltipPlugin = useTooltip({
    text: multilines,
    tooltipClassName: styleMultiline,
  });

  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={props.className}>
      <DocDemo title={"Tooltip Wrapper"}>
        <TooltipWrapper text={text}>Hover to see tooltip</TooltipWrapper>
        <DocSnippet code={wrapperCode} />
      </DocDemo>

      <DocDemo title={"useTooltip"}>
        <DocBlock content={content} />

        <div>
          <span ref={tooltipPlugin.ref}>Hover to see tooltip</span>
        </div>

        <Space height={80} />

        <div>
          <div className={nextTooltipPlugin.boxStyle} ref={nextTooltipPlugin.ref}>
            <JimoButton text="Hover to see" onClick={null} />
          </div>
        </div>

        <DocSnippet code={code} />

        {tooltipPlugin.ui}
        {nextTooltipPlugin.ui}
      </DocDemo>
    </div>
  );
});

export default DemoTooltipWrapper;

let code = `
let tooltipPlugin = useTooltip({
  text: text,
});

<div className={tooltipPlugin.boxStyle} ref={tooltipPlugin.ref}>
  <JimoButton text="Hover to see" onClick={null} />
</div>
<div>{nextTooltipPlugin.ui}</div>
`;

let content = `
提供 Hooks 接口, 通过 ref 获取位置, 不过容器位置比较难控制, 需要设置为 inline block(\`boxStyle\`).
`;

let styleMultiline = css`
  white-space: pre;
`;

let text =
  "As of right now, it's browser support. Line clamps are part of the CSS Overflow Module Level 3 which is currently in Editor's Draft and totally unsupported at the moment. 上海积梦智能科技有限公司， s为亟待升级改革的离散型制造业提供数字化工厂解决方案。积梦智能通过互联网和物联网技术，帮助企业快速建设自己的数字工厂，实现生产运营的可视化，驱动管理实时决策，助力企业提升运营效率，降低运营成本，从而获取更快的市场响应速度。 ";

let multilines = `Jiamusi Fangchenggang Zhaoqing

  安庆甘南梧州六安
  廊坊贺州-德州-20
  亳州阳泉中卫吴忠
`;

let wrapperCode = `
<TooltipWrapper text={text}>Hover to see</TooltipWrapper>
`;
