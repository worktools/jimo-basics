import { css } from "@emotion/css";

let emptyStyle = css``;

/** 全局主题配置入口, 通过 emotion 方式修改, 基于 mutable reference */
export let GlobalThemeVariables = {
  // link
  link: emptyStyle,

  // buttons
  buttonBase: emptyStyle,
  buttonFilled: emptyStyle,
  buttonCanceling: emptyStyle,
  buttonDisabled: emptyStyle,
  buttonBordered: emptyStyle,

  // tabs
  tabs: emptyStyle,
  tabItem: emptyStyle,
  tabSelected: emptyStyle,

  // underline tabs
  underlineTabs: emptyStyle,
  underlineTabItem: emptyStyle,
  underlineTabSelected: emptyStyle,

  // loading area
  loadingArea: emptyStyle,
  loadingAreaCover: emptyStyle,
  loadingAreaIndicator: emptyStyle,
};

export let attachJimoBasicsThemeVariables = (customVariables: Partial<typeof GlobalThemeVariables>): void => {
  Object.assign(GlobalThemeVariables, customVariables);
};
