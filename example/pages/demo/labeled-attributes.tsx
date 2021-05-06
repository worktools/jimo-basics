import React, { FC } from "react";
import { css } from "@emotion/css";
import { DocDemo, DocSnippet, DocBlock } from "@worktools/doc-frame";
import LabeledAttributes, { ILabeledAttribute } from "../../../src/labeled-attributes";
import { expand } from "@worktools/flex-styles";

let DemoLabeledAttributes: FC<{}> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */

  let shortAttributes: ILabeledAttribute[] = [
    {
      label: "LWV-ULR-451",
      value: "天水",
    },
    {
      label: "Handan",
      value: "Boertala",
    },
    {
      label: "恩施",
      value: "西双版纳",
    },
    {
      label: "河池",
      value: "Hangzhou",
    },
    {
      label: "Shiyan",
      value: "塔城",
    },
    {
      label: "YMQ-MHF-521",
      value: "博尔塔拉 伊犁 三亚",
    },
    {
      label: "齐齐哈尔",
      value: "Tongren",
    },
  ];

  let longAttributes: ILabeledAttribute[] = [
    {
      label: "Liaocheng Lüliang Jingmen",
      value: "重庆 Jieyang 伊春 哈密 海西 庆阳 Dingxi Tai'an Datong 韶关 Lincang 荆州",
    },
    {
      label: "Enshi Yan'an Yongzhou",
      value: "Nyingchi Changzhou Tieling",
    },
    {
      label: "Tongchuan Chengdu Huaibei",
      value: "Huangshan 资阳 Huainan 襄樊 Xinxiang 黄石 Dehong",
    },
    {
      label: "Liaocheng Lüliang Jingmen",
      value: "重庆 Jieyang 伊春 哈密 海西 庆阳 Dingxi Tai'an Datong 韶关 Lincang 荆州",
    },
    {
      label: "Zhengzhou Hengyang",
      value: "大同 锡林郭勒 Yichang Xuancheng Yancheng",
    },
    {
      label: "48",
      value:
        "Linguolexi 重庆 河源 Taizhou Chamdo 池州 Kezilesukeerkezi 通化 文山 宣城 Ganzhou 阿勒泰 Xinyu Langfang 郑州 揭阳 Chifeng 威海 渭南 阿克苏 Huizhou Nanping Shangqiu 七台河 Puyang Xinyang Tongren Shantou Zhuhai Shanwei Chuzhou Xinyu Jiaozuo 十堰 Tai'an 吉林 唐山 Yushu Chuzhou Hainan Liaocheng Huainan 昌都 鄂州 赣州 Yiyang 伊春 Xinzhou Xiangfan",
    },
  ];

  let mixedAttributes: ILabeledAttribute[] = [
    {
      label: "LWV-ULR-451",
      value: "天水",
    },
    {
      label: "Handan",
      value: "Boertala",
    },
    {
      label: "恩施",
      value: "西双版纳",
    },
    {
      label: "哈尔滨漳州陇南济宁",
      value: "保定六盘水孝感宁波",
    },
    {
      label: "湘潭",
      value: "Dandong Hangzhou Quzhou",
    },
    {
      label: "张掖铜陵宝鸡长沙",
      value: "Dandong Hangzhou Quzhou",
    },
    {
      label: "Daxinganling",
      value: "宜昌 随州 益阳",
    },
    {
      label: "Liaocheng Lüliang Jingmen",
      value: "重庆 Jieyang 伊春 哈密 海西 庆阳 Dingxi Tai'an Datong 韶关 Lincang 荆州",
    },
    {
      label: "48",
      value:
        "Linguolexi 重庆 河源 Taizhou Chamdo 池州 Kezilesukeerkezi 通化 文山 宣城 Ganzhou 阿勒泰 Xinyu Langfang 郑州 揭阳 Chifeng 威海 渭南 阿克苏 Huizhou Nanping Shangqiu 七台河 Puyang Xinyang Tongren Shantou Zhuhai Shanwei Chuzhou Xinyu Jiaozuo 十堰 Tai'an 吉林 唐山 Yushu Chuzhou Hainan Liaocheng Huainan 昌都 鄂州 赣州 Yiyang 伊春 Xinzhou Xiangfan",
    },
  ];

  return (
    <div className={expand}>
      <DocDemo title="标签属性">
        <DocBlock content={content} />
        <DocSnippet code={code} />
      </DocDemo>

      <DocDemo title={"Short"} className={styleWidth}>
        <LabeledAttributes attributes={shortAttributes} />
      </DocDemo>

      <DocDemo title={"Short align right"} className={styleWidth}>
        <LabeledAttributes attributes={shortAttributes} alignToRight />
      </DocDemo>

      <DocDemo title={"Mixed"} className={styleWidth}>
        <LabeledAttributes attributes={mixedAttributes} />
      </DocDemo>

      <DocDemo title={"Mixed align right"} className={styleWidth}>
        <LabeledAttributes attributes={mixedAttributes} alignToRight />
      </DocDemo>

      <DocDemo title={"Long"} className={styleWidth}>
        <LabeledAttributes attributes={longAttributes} />
      </DocDemo>
    </div>
  );
});

export default DemoLabeledAttributes;

let styleWidth = css`
  /* max-width: 1000px; */
  max-width: 10000px;
  min-width: 0;
  width: auto;
`;

let code = `
let shortAttributes: ILabeledAttribute[] = [
  {
    label: "LWV-ULR-451",
    value: "天水",
  },
  // ...
]

<LabeledAttributes attributes={shortAttributes} />

<LabeledAttributes attributes={shortAttributes} alignToRight />
`;

let content = `
LabeledAttributes 默认提供三列的布局. 支持标签左右对齐. 具体业务还可以根据 \`itemClassName\`, \`LabelClassName\`, \`itemWidth\` 等属性控制.
`;
