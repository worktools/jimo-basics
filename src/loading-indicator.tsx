// Bouncing dots based on https://tobiasahlin.com/spinkit/

import React, { FC } from "react";
import { css, cx, keyframes } from "@emotion/css";
import { GlobalThemeVariables } from "./theme";

let LoadingIndicator: FC<{
  className?: string;
  dotClassName?: string;
  antdStyle?: boolean;
}> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */

  if (props.antdStyle) {
    return (
      <div className={cx(styleAntdSpinner, props.className)}>
        <div className={cx(stylePetal, props.dotClassName, styleP1)}></div>
        <div className={cx(stylePetal, props.dotClassName, styleP2)}></div>
        <div className={cx(stylePetal, props.dotClassName, styleP3)}></div>
        <div className={cx(stylePetal, props.dotClassName, styleP4)}></div>
      </div>
    );
  }

  return (
    <div className={cx(styleSpinner, GlobalThemeVariables.loadingAreaIndicator, props.className)}>
      <div className={cx(styleBounce, props.dotClassName, styleB1)}></div>
      <div className={cx(styleBounce, props.dotClassName, styleB2)}></div>
      <div className={cx(styleBounce, props.dotClassName)}></div>
    </div>
  );
});

export default LoadingIndicator;

let styleSpinner = css`
  margin: 8px;
  width: 70px;
  text-align: center;
`;

let styleSkBounceDelay = keyframes`
  0%, 80%, 100% { transform: scale(0) }
  40% { transform: scale(1.0) }
`;

let styleBounce = css`
  width: 18px;
  height: 18px;
  background-color: #ccc;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: ${styleSkBounceDelay} 1.4s infinite ease-in-out both;
  animation: ${styleSkBounceDelay} 1.4s infinite ease-in-out both;
`;

let styleB1 = css`
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
`;

let styleB2 = css`
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
`;

let rotateCircle = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

let breath = keyframes`
  0% {
    opacity: 0.8;
  }

  50% {
    opacity: 0.2;
  }

  100% {
    opacity: 0.8;
  }
`;

let styleAntdSpinner = css`
  width: 20px;
  height: 20px;
  position: relative;
  animation: ${rotateCircle} 1.2s infinite linear;
`;

let stylePetal = css`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: hsla(221, 100%, 61%, 1);
  position: absolute;
  animation: ${breath} 2s infinite linear;
`;

let styleP1 = css`
  top: 0;
  left: 0;
  animation-delay: 0s;
`;
let styleP2 = css`
  top: 0;
  right: 0;
  animation-delay: 0.5s;
`;
let styleP3 = css`
  bottom: 0;
  right: 0;
  animation-delay: 1s;
`;
let styleP4 = css`
  bottom: 0;
  left: 0;
  animation-delay: 2s;
`;
