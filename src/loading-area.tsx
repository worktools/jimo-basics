import React, { FC, useState } from "react";
import { css, cx } from "@emotion/css";
import LoadingIndicator from "./loading-indicator";
import { center } from "@worktools/flex-styles";
import { CSSTransition } from "react-transition-group";
import { GlobalThemeVariables } from "./theme";

let LoadingArea: FC<{
  isLoading?: boolean;
  className?: string;
  coverClassName?: string;
  indicatorClassName?: string;
  antdStyle?: boolean;
}> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={cx(styleContainer, GlobalThemeVariables.loadingArea, props.className)}>
      {props.children}
      <CSSTransition in={props.isLoading} timeout={200} classNames="fade-in-out" unmountOnExit>
        <div className={cx(center, styleCover, GlobalThemeVariables.loadingAreaCover, props.coverClassName)}>
          <LoadingIndicator antdStyle={props.antdStyle} className={props.indicatorClassName} />
        </div>
      </CSSTransition>
    </div>
  );
});

export default LoadingArea;

let styleContainer = css`
  position: relative;

  .fade-in-out-enter {
    opacity: 0;
  }
  .fade-in-out-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .fade-in-out-exit {
    opacity: 1;
  }
  .fade-in-out-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

let styleCover = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: hsl(0, 0%, 100%, 0.7);
`;
