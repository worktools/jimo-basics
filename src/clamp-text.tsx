import React, { FC, useState, useRef, CSSProperties, useReducer } from "react";
import { css, cx } from "@emotion/css";
import BasicTooltip, { useTooltip } from "./tooltip";

export interface IClampTextProps {
  /** defaults to 1 */
  lines?: number;
  text: React.ReactNode;
  /** text property might be a node with text, use tooltipText to overwrite */
  tooltipText?: string;
  className?: string;
  style?: CSSProperties;
  tooltipClassName?: string;
  addTooltip?: boolean;
  onTooltipStateChange?: (visible?: boolean) => void;
  /** defaults to 160ms, for both enter and leave */
  delay?: number;
  /** respond to clicks on text, not including tooltop */
  onTextClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /** defaults to `-` */
  emptySymbol?: string;
}

let ClampText: FC<IClampTextProps> = React.memo((props) => {
  let lines = props.lines || ClampText.defaultProps.lines || 1;

  /** Plugins */

  let tooltipPlugin = useTooltip({
    text: props.tooltipText || props.text,
    tooltipClassName: props.tooltipClassName,
    delay: props.delay,
    shouldPop: (element) => {
      return element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth;
    },
    onStatusChange: props.onTooltipStateChange,
  });

  /** Methods */

  let onTextClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (props.onTextClick != null && event.target === tooltipPlugin.ref.current) {
      props.onTextClick(event);
    }
  };

  /** Effects */
  /** Renderers */

  let renderTooltip = () => {
    if (props.addTooltip) {
      return tooltipPlugin.ui;
    }
    if (ClampText.defaultProps.addTooltip) {
      return tooltipPlugin.ui;
    }
    return null;
  };

  let emptySymbol = props.emptySymbol ?? "-";

  if (lines === 1) {
    return (
      <div className={cx(styleSingleLine, props.className)} style={props.style} ref={tooltipPlugin.ref} onClick={onTextClick}>
        {props.text || emptySymbol}
        {renderTooltip()}
      </div>
    );
  }

  return (
    <div
      className={styleClampText}
      ref={tooltipPlugin.ref}
      style={{
        WebkitLineClamp: lines,
        ...props.style,
      }}
      onClick={onTextClick}
    >
      {props.text}
      {renderTooltip()}
    </div>
  );
});

ClampText.defaultProps = {
  addTooltip: false,
  lines: 1,
};

export default ClampText;

// based on https://css-tricks.com/almanac/properties/l/line-clamp/
let styleClampText = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  max-width: 100%;
  word-break: break-word;
`;

let styleSingleLine = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  max-width: 100%;
  word-break: break-word;
`;
