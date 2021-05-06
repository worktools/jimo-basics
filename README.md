## Jimo Basics

> Very basic UI components.

http://fe.jimu.io/jimo-basics/

### Usage

![](https://img.shields.io/npm/v/@worktools/jimo-basics.svg?style=flat-square)

```bash
yarn add @worktools/jimo-basics
```

Button:

```tsx
<JimoButton prepend={`+`} text={"DEMO"} fillColor onClick={() => {}} />
```

Tabs:

```tsx
let items: IJimoTabItem[] = [
  { title: "A", value: "a" },
  { title: "This is b", value: "b" },
];

<JimoTabs
  items={items}
  value={tab}
  onClick={(value) => {
    setTab(value.value);
  }}
/>;
```

Todo page component:

```tsx
<TodoFeature title="A not finished feature" description={"Some description"} />
```

### Workflow

https://github.com/jimengio/ts-workflow

### License

MIT
