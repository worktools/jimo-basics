import React, { FC, ReactNode } from "react";
import { css, cx } from "@emotion/css";
import { rowCenter } from "@worktools/flex-styles";
import { Space } from "@worktools/flex-styles";
import { GlobalThemeVariables } from "./theme";

let themeColor = "hsla(221, 100%, 61%, 1)";

let JimoButton: FC<{
  prepend?: ReactNode;
  text: string;
  className?: string;
  fillColor?: boolean;
  /** special style for cancel button, with very shallow border color */
  canceling?: boolean;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<any, MouseEvent>) => void;
  /** data attribute hook passing to data-action */
  "data-action"?: string;
}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  let hasPrepend = props.prepend != null;
  let bordered = !props.fillColor && !props.canceling && !props.disabled;

  return (
    <button
      className={cx(
        rowCenter,
        styleButton,
        GlobalThemeVariables.buttonBase,
        props.className,
        props.fillColor && !props.disabled ? cx(styleFilled, GlobalThemeVariables.buttonFilled) : null,
        props.canceling && !props.disabled ? cx(styleCanceling, GlobalThemeVariables.buttonCanceling) : null,
        bordered ? cx(styleBordered, GlobalThemeVariables.buttonBordered) : null,
        props.disabled ? cx(styleDisabled, GlobalThemeVariables.buttonDisabled) : null
      )}
      data-action={props["data-action"] || props.text}
      onClick={(event) => {
        if (props.disabled) {
          return;
        }

        props.onClick?.(event);
      }}
    >
      {hasPrepend ? (
        <>
          {props.prepend}
          <Space width={8} />
        </>
      ) : null}
      {props.text}
    </button>
  );
});

export default JimoButton;

const styleButton = css`
  min-width: 76px;
  display: inline-flex;
  height: 32px;
  line-height: 32px;
  padding: 0 16px;
  color: ${themeColor};
  border-radius: 2px;
  cursor: pointer;
  vertical-align: middle;
  transition-duration: 240ms;
  user-select: none;
  font-size: 14px;
  background-color: white;
  border: none;

  &:active,
  &:focus {
    outline: none;
  }
`;

let styleFilled = css`
  background-color: ${themeColor};
  color: white;

  :hover {
    opacity: 0.7;
  }

  &:active {
    background-color: #1755e0;
    color: white;
    opacity: 1;
  }
`;

let styleBordered = css`
  border: 1px solid ${themeColor};
  padding: 0 15px;

  :hover {
    opacity: 0.7;
  }

  &:active {
    border-color: #1755e0;
    color: #1755e0;
    opacity: 1;
  }
`;

let styleCanceling = css`
  border-radius: 2px;
  color: hsla(0, 0%, 0%, 0.65);
  border: 1px solid rgba(217, 217, 217, 1);

  :hover {
    opacity: 0.7;
  }

  :active {
    color: hsla(0, 0%, 0%, 0.65);
    border: 1px solid rgba(217, 217, 217, 1);
    opacity: 1;
  }
`;

let styleDisabled = css`
  background-color: hsla(0, 0%, 92%, 1);
  border-color: hsla(0, 0%, 92%, 1);
  color: hsla(0, 0%, 59%, 1);
  cursor: not-allowed;
`;
