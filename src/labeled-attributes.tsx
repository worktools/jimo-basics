import React, { FC, ReactNode } from "react";
import { css, cx } from "@emotion/css";
import { row, expand } from "@worktools/flex-styles";

export interface ILabeledAttribute {
  label: string;
  value: ReactNode;
  itemClassName?: string;
  labelClassName?: string;
  valueClassName?: string;
  itemWidth?: number | string;
  labelWidth?: number | string;
}

let LabeledAttributes: FC<{
  attributes: ILabeledAttribute[];
  className?: string;
  alignToRight?: boolean;
  itemClassName?: string;
  /** 默认 320px/33%, 具体按照业务配置 */
  itemWidth?: string | number;
  labelClassName?: string;
  labelWidth?: string | number;

  emptySymbol?: string;
}> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */

  return (
    <div className={cx(styleContainer, props.className)}>
      {props.attributes.map((attr, idx) => {
        return (
          <div key={idx} className={cx(row, styleItem, props.itemClassName, attr.itemClassName)} style={{ width: attr.itemWidth || props.itemWidth }}>
            <div
              className={cx(styleLabel, props.alignToRight ? styleAlignToRight : null, props.labelClassName, attr.labelClassName)}
              style={{ width: attr.labelWidth || props.labelWidth }}
            >
              {attr.label}:
            </div>
            <div className={cx(expand, styleValue)}>{attr.value != null && attr.value !== "" ? attr.value : props.emptySymbol ?? "-"}</div>
          </div>
        );
      })}
    </div>
  );
});

export default LabeledAttributes;

let styleItem = css`
  padding-right: 16px;
  margin: 4px 0;
  display: inline-flex;
  min-width: 320px;
  min-width: max(320px, 33%);
  vertical-align: top;
  font-size: 14px;
  line-height: 22px;
`;

let styleLabel = css`
  color: hsla(0, 0%, 44%, 1);
  margin-right: 12px;
`;

let styleValue = css`
  color: hsla(0, 0%, 20%, 1);
`;

let styleContainer = css``;

let styleAlignToRight = css`
  text-align: right;
  min-width: 120px;
`;
