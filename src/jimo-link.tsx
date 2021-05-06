import React, { FC, ReactNode } from "react";
import { css, cx } from "@emotion/css";
import { GlobalThemeVariables } from "./theme";

interface JimoLinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  text?: ReactNode;
  className?: string;
}

/** Jimo 主题的按钮, 定制了颜色样式 */
let JimoLink: FC<JimoLinkProps> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */

  let { text, className, onClick, ...restProps } = props;

  return (
    <a tabIndex={0} className={cx(styleLink, GlobalThemeVariables.link, props.className)} {...restProps}>
      {props.text || props.children || "-"}
    </a>
  );
});

export default JimoLink;

let styleLink = css`
  color: hsl(221, 100%, 61%);
  cursor: pointer;
  user-select: none;

  &:hover {
    color: hsl(222, 100%, 72%);
  }

  &:focus {
    color: hsl(222, 100%, 72%);
    outline: none;
  }

  &:active {
    color: hsl(222, 100%, 61%);
  }
`;
