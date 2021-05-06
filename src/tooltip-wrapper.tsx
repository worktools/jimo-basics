import React, { FC } from "react";
import { css } from "@emotion/css";
import { ITooltipWrapperProps, useTooltip } from "./tooltip";

let TooltipWrapper: FC<ITooltipWrapperProps> = React.memo((props) => {
  let tooltipPlugin = useTooltip(props);

  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={tooltipPlugin.boxStyle} ref={tooltipPlugin.ref}>
      {props.children}
      {tooltipPlugin.ui}
    </div>
  );
});

export default TooltipWrapper;
