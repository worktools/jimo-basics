import React, { FC } from "react";
import { css, cx } from "@emotion/css";
import { center } from "@worktools/flex-styles";
import Space from "@worktools/flex-styles/lib/space";

let TodoFeature: FC<{
  title?: string;
  description?: string;
  data?: any;
}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={cx(center, styleContainer)}>
      <div className={styleTitle}>{props.title || "TODO"}</div>

      <Space height={16} />

      <div className={styleDesc}>{props.description || "Not ready yet..."}</div>

      <Space height={32} />

      <pre>{JSON.stringify(props.data, null, 2)}</pre>
    </div>
  );
});

export default TodoFeature;

let styleContainer = css`
  min-width: 400px;
  min-height: 200px;
`;

let styleTitle = css`
  font-size: 32px;
  font-family: Helvetica Neue, Arial, Helvetica, sans-serif;
  font-weight: 300;
`;

let styleDesc = css`
  color: #aaa;
`;
