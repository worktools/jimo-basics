import React, { FC } from "react";
import { css, cx } from "@emotion/css";

import { HashRedirect, findRouteTarget } from "@worktools/ruled-router/lib/dom";
import { genRouter, GenRouterTypeTree } from "controller/generated-router";
import { DocSidebar, ISidebarEntry } from "@worktools/doc-frame";
import { fullscreen, row, expand } from "@worktools/flex-styles";
import DemoButtons from "./demo/buttons";
import DemoTodo from "./demo/todo";
import DemoTabs from "./demo/tabs";
import DemoLoadingIndicator from "./demo/loading-indicator";
import DemoClampText from "./demo/clamp-text";
import DemoTextTooltip from "./demo/text-tooltip";
import DemoLabeledAttributes from "./demo/labeled-attributes";
import DemoColorScheme from "./demo/color-scheme";
import DemoLayoutSizes from "./demo/layout-sizes";
import DemoTooltipWrapper from "./demo/tooltip-wrapper";
import DemoStatusTag from "./demo/status-tag";
import DemoCustomTheme from "./demo/custom-theme";

let items: ISidebarEntry[] = [
  {
    title: "Buttons",
    path: genRouter.buttons.name,
  },
  {
    title: "Color Scheme",
    path: genRouter.colorScheme.name,
  },
  {
    title: "Layout Sizes",
    path: genRouter.layoutSizes.name,
  },
  {
    title: "Tabs",
    path: genRouter.tabs.name,
  },
  {
    title: "Todo page",
    path: genRouter.todo.name,
  },
  {
    title: "Loading indicator",
    path: genRouter.loadingIndicator.name,
  },
  {
    title: "Clamp text",
    path: genRouter.clampText.name,
  },
  {
    title: "Clamp text with tooltip",
    path: genRouter.textTooltip.name,
  },
  {
    title: "useTooltip",
    path: genRouter.tooltipWrapper.name,
  },
  {
    title: "Labeled attributes",
    path: genRouter.labeledAttributes.name,
  },
  {
    title: "Status Tag",
    path: genRouter.statusTag.name,
  },
  {
    title: "Custom theme",
    path: genRouter.theme.name,
  },
];

const renderChildPage = (routerTree: GenRouterTypeTree["next"]) => {
  if (routerTree != null) {
    switch (routerTree.name) {
      case "buttons":
        return <DemoButtons />;
      case "todo":
        return <DemoTodo />;
      case "tabs":
        return <DemoTabs />;
      case "loading-indicator":
        return <DemoLoadingIndicator />;
      case "clamp-text":
        return <DemoClampText />;
      case "text-tooltip":
        return <DemoTextTooltip />;
      case "labeled-attributes":
        return <DemoLabeledAttributes />;
      case "color-scheme":
        return <DemoColorScheme />;
      case "layout-sizes":
        return <DemoLayoutSizes />;
      case "tooltip-wrapper":
        return <DemoTooltipWrapper />;
      case "status-tag":
        return <DemoStatusTag />;
      case "theme":
        return <DemoCustomTheme />;
      default:
        return <HashRedirect to={genRouter.buttons.name} noDelay></HashRedirect>;
    }
  }
  return <div>NOTHING</div>;
};

let onSwitchPage = (path: string) => {
  let target = findRouteTarget(genRouter, path);
  if (target != null) {
    target.go();
  }
};

let Container: FC<{
  router: GenRouterTypeTree["next"];
}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={cx(fullscreen, row, styleContainer)}>
      <DocSidebar
        title="Jimo Basics"
        currentPath={props.router.name}
        onSwitch={(item) => {
          onSwitchPage(item.path);
        }}
        items={items}
      />

      <div className={cx(expand, styleBody)}>{renderChildPage(props.router)}</div>
    </div>
  );
});

export default Container;

const styleContainer = css`
  overflow: auto;
`;

let styleBody = css`
  padding: 16px;
`;
