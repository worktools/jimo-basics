import queryString from "query-string";

type Id = string;

export function switchPath(x: string) {
  location.hash = `#${x}`;
}

function qsStringify(queries: { [k: string]: string }) {
  return queryString.stringify(queries);
}

// generated

// Generated with router-code-generator@0.2.7

export let genRouter = {
  home: {
    name: "home",
    raw: "home",
    path: () => `/home`,
    go: () => switchPath(`/home`),
  },
  colorScheme: {
    name: "color-scheme",
    raw: "color-scheme",
    path: () => `/color-scheme`,
    go: () => switchPath(`/color-scheme`),
  },
  layoutSizes: {
    name: "layout-sizes",
    raw: "layout-sizes",
    path: () => `/layout-sizes`,
    go: () => switchPath(`/layout-sizes`),
  },
  buttons: {
    name: "buttons",
    raw: "buttons",
    path: () => `/buttons`,
    go: () => switchPath(`/buttons`),
  },
  tabs: {
    name: "tabs",
    raw: "tabs",
    path: () => `/tabs`,
    go: () => switchPath(`/tabs`),
  },
  todo: {
    name: "todo",
    raw: "todo",
    path: () => `/todo`,
    go: () => switchPath(`/todo`),
  },
  loadingIndicator: {
    name: "loading-indicator",
    raw: "loading-indicator",
    path: () => `/loading-indicator`,
    go: () => switchPath(`/loading-indicator`),
  },
  clampText: {
    name: "clamp-text",
    raw: "clamp-text",
    path: () => `/clamp-text`,
    go: () => switchPath(`/clamp-text`),
  },
  textTooltip: {
    name: "text-tooltip",
    raw: "text-tooltip",
    path: () => `/text-tooltip`,
    go: () => switchPath(`/text-tooltip`),
  },
  tooltipWrapper: {
    name: "tooltip-wrapper",
    raw: "tooltip-wrapper",
    path: () => `/tooltip-wrapper`,
    go: () => switchPath(`/tooltip-wrapper`),
  },
  labeledAttributes: {
    name: "labeled-attributes",
    raw: "labeled-attributes",
    path: () => `/labeled-attributes`,
    go: () => switchPath(`/labeled-attributes`),
  },
  statusTag: {
    name: "status-tag",
    raw: "status-tag",
    path: () => `/status-tag`,
    go: () => switchPath(`/status-tag`),
  },
  theme: {
    name: "theme",
    raw: "theme",
    path: () => `/theme`,
    go: () => switchPath(`/theme`),
  },
  $: {
    name: "home",
    raw: "",
    path: () => `/`,
    go: () => switchPath(`/`),
  },
};

/** Deprecating, use GenRouterTypeTree["next"] instead */
export type GenRouterTypeMain = GenRouterTypeTree["next"];

export interface GenRouterTypeTree {
  next:
    | GenRouterTypeTree["home"]
    | GenRouterTypeTree["colorScheme"]
    | GenRouterTypeTree["layoutSizes"]
    | GenRouterTypeTree["buttons"]
    | GenRouterTypeTree["tabs"]
    | GenRouterTypeTree["todo"]
    | GenRouterTypeTree["loadingIndicator"]
    | GenRouterTypeTree["clampText"]
    | GenRouterTypeTree["textTooltip"]
    | GenRouterTypeTree["tooltipWrapper"]
    | GenRouterTypeTree["labeledAttributes"]
    | GenRouterTypeTree["statusTag"]
    | GenRouterTypeTree["theme"]
    | GenRouterTypeTree["$"];
  home: {
    name: "home";
    params: {};
    query: {};
    next: null;
  };
  colorScheme: {
    name: "color-scheme";
    params: {};
    query: {};
    next: null;
  };
  layoutSizes: {
    name: "layout-sizes";
    params: {};
    query: {};
    next: null;
  };
  buttons: {
    name: "buttons";
    params: {};
    query: {};
    next: null;
  };
  tabs: {
    name: "tabs";
    params: {};
    query: {};
    next: null;
  };
  todo: {
    name: "todo";
    params: {};
    query: {};
    next: null;
  };
  loadingIndicator: {
    name: "loading-indicator";
    params: {};
    query: {};
    next: null;
  };
  clampText: {
    name: "clamp-text";
    params: {};
    query: {};
    next: null;
  };
  textTooltip: {
    name: "text-tooltip";
    params: {};
    query: {};
    next: null;
  };
  tooltipWrapper: {
    name: "tooltip-wrapper";
    params: {};
    query: {};
    next: null;
  };
  labeledAttributes: {
    name: "labeled-attributes";
    params: {};
    query: {};
    next: null;
  };
  statusTag: {
    name: "status-tag";
    params: {};
    query: {};
    next: null;
  };
  theme: {
    name: "theme";
    params: {};
    query: {};
    next: null;
  };
  $: {
    name: "home";
    params: {};
    query: {};
    next: null;
  };
}
