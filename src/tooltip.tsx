import React, { FC, useRef, useEffect, useState, CSSProperties, ReactNode } from "react";
import ReactDOM from "react-dom";
import { css, cx } from "@emotion/css";
import { CSSTransition } from "react-transition-group";

let transitionDuration = 120;
let tipColor = "hsla(0, 0%, 59%, 1)";

let BasicTooltip: FC<{
  visible: boolean;
  pointer: { x: number; top: number; bottom: number };
  text: React.ReactNode;
  className?: string;
}> = React.memo((props) => {
  let containerRef = useRef<HTMLDivElement>();

  /** Plugins */
  /** Methods */
  /** Effects */

  if (containerRef.current == null) {
    let el = document.createElement("div");
    el.className = styleTooltipContainer;
    containerRef.current = el;
  }

  useEffect(() => {
    document.body.appendChild(containerRef.current);
    return () => {
      containerRef.current.remove();
    };
  }, []);

  let isLongText = typeof props.text === "string" && props.text.length > 100;
  // 180 is a very rough value since exact height of tooltip is not easily grabbed
  let showBelow = props.pointer.top < 180;

  /** Renderers */
  return ReactDOM.createPortal(
    <CSSTransition in={props.visible} timeout={transitionDuration} classNames="fade-in-out" unmountOnExit>
      <div
        className={cx(styleTooptip, isLongText ? styleLongText : null, showBelow ? styleBelow : null, props.className)}
        style={
          showBelow
            ? {
                left: props.pointer.x,
                top: props.pointer.bottom + 6,
              }
            : {
                left: props.pointer.x,
                bottom: window.innerHeight - props.pointer.top + 6,
              }
        }
      >
        {props.text}
      </div>
    </CSSTransition>,
    containerRef.current
  );
});

export default BasicTooltip;

export interface ITooltipWrapperProps {
  text: React.ReactNode;
  tooltipClassName?: string;
  /** defaults to 160ms, for both enter and leave */
  delay?: number;
  /** respond to clicks on text, not including tooltop */
  onTextClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /** detect if popup is really required */
  shouldPop?: (element: HTMLElement) => boolean;
  onStatusChange?: (visible: boolean) => void;
  children?: ReactNode;
}

export let useTooltip = (props: ITooltipWrapperProps) => {
  let elRef = useRef<HTMLDivElement>();
  let enteringTimeoutRef = useRef<NodeJS.Timeout>(null);
  let leavingTimeoutRef = useRef<NodeJS.Timeout>(null);
  let wheelListenerRef = useRef<() => void>();

  let [showToopTip, setShowTooltip] = useState(false);
  let [pointer, setPointer] = useState({ x: 0, top: 0, bottom: 0 });

  let delay = props.delay ?? 160;

  /** Plugins */
  /** Methods */

  let handleEnter = () => {
    if (props.shouldPop != null) {
      if (!props.shouldPop(elRef.current)) {
        return;
      }
    }
    if (enteringTimeoutRef.current != null) {
      return;
    }

    if (leavingTimeoutRef.current != null) {
      clearTimeout(leavingTimeoutRef.current);
      leavingTimeoutRef.current = null;
    }

    enteringTimeoutRef.current = setTimeout(() => {
      let rect = elRef.current.getBoundingClientRect() as DOMRect;

      setPointer({
        x: rect.left + elRef.current.offsetWidth / 2,
        top: rect.top,
        bottom: rect.bottom,
      });

      setShowTooltip(true);
      enteringTimeoutRef.current = null;
    }, delay);
  };

  let handleLeave = () => {
    if (leavingTimeoutRef.current != null) {
      return;
    }

    if (enteringTimeoutRef.current != null) {
      clearTimeout(enteringTimeoutRef.current);
      enteringTimeoutRef.current = null;
    }

    leavingTimeoutRef.current = setTimeout(() => {
      setShowTooltip(false);
      leavingTimeoutRef.current = null;
    }, delay);
  };

  wheelListenerRef.current = () => {
    if (showToopTip) {
      setShowTooltip(false);
    }
  };

  /** Effects */

  useEffect(() => {
    elRef.current.addEventListener("mouseenter", handleEnter);
    elRef.current.addEventListener("mouseleave", handleLeave);

    return () => {
      elRef.current?.removeEventListener("mouseenter", handleEnter);
      elRef.current?.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  useEffect(() => {
    let onWheel = () => {
      wheelListenerRef.current?.();
    };

    window.addEventListener("wheel", onWheel);
    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  });

  useEffect(() => {
    props.onStatusChange?.(showToopTip);
  }, [showToopTip]);

  /** Renderers */

  let ui = <BasicTooltip pointer={pointer} visible={showToopTip} className={props.tooltipClassName} text={props.text} />;

  return {
    ui,
    ref: elRef,
    boxStyle: styleInlineContainer,
  };
};

let styleTooptip = css`
  position: fixed;
  animation-timing-function: ease-in-out;
  opacity: 1;
  transform: translate(-50%, 0) scale(1);
  transition-property: opacity, transform;
  transform-origin: 50% calc(100% + 6px);
  background-color: ${tipColor};
  color: white;
  padding: 5px 8px;
  border-radius: 2px;
  font-size: 13px;
  max-width: 280px;
  font-size: 14px;
  line-height: 22px;

  white-space: normal;
  word-break: break-word;

  :before {
    position: absolute;
    top: 100%;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 20px;
    height: 8px;
    margin: auto;
    content: "";
    pointer-events: auto;
    border-top: 8px solid ${tipColor};
    border-bottom: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    box-sizing: border-box;
  }

  :after {
    position: absolute;
    top: 100%;
    left: 0;
    height: 8px;
    width: 100%;
    content: "";
    background-color: transparent;
  }
`;

let styleTooltipContainer = css`
  z-index: 1200; /* display above modals */
  position: absolute;

  .fade-in-out-enter {
    opacity: 0.3;
    transform: translate(-50%, 0) scale(0.94);
  }
  .fade-in-out-enter-active {
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
    transition-duration: ${transitionDuration}ms;
  }
  .fade-in-out-exit {
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
  }
  .fade-in-out-exit-active {
    opacity: 0.3;
    transform: translate(-50%, 0) scale(0.94);
    transition-duration: ${transitionDuration}ms;
  }
`;

let styleLongText = css`
  max-width: 480px;
`;

let styleBelow = css`
  :before {
    position: absolute;
    bottom: 100%;
    right: 0;
    top: 0;
    left: 0;
    display: block;
    width: 20px;
    height: 8px;
    margin: auto;
    content: "";
    pointer-events: auto;
    border-bottom: 8px solid ${tipColor};
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    box-sizing: border-box;
  }

  :after {
    position: absolute;
    bottom: 100%;
    left: 0;
    height: 8px;
    width: 100%;
    content: "";
    background-color: transparent;
  }
`;

let styleInlineContainer = css`
  display: inline-block;
`;
