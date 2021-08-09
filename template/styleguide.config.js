/* eslint-disable */
// https://react-styleguidist.js.org/docs/documenting

module.exports = {
  pagePerSection: false,
  tocMode: 'expand',
  propsParser: require("react-docgen-typescript").parse,
  components: "src/**/*.{js,jsx,ts,tsx}",
  styleguideDir: "docs",
  sections: [
    {
      name: "Core Components",
      description: "Core Components are essential application modules packaged as part of Xing Zhi's custom CRA bootstrap. It aids to reduce the initial development inertia by providing features such as (but not limited to) routing, theming and provides a highly reusable architecture design.",
      components: "src/core/**/*.{js,jsx,ts,tsx}",
      exampleMode: 'hidden',
      usageMode: 'expand',
    },
    {
      name: "Widget Components",
      description: "Widget Components are application specific. Any resuable components should belong here. Avoid using the global store in these components, instead prop pass the page components. This makes the Widgets extremely easy to test and reliable.",
      components: "src/widgets/**/*.{js,jsx,ts,tsx}",
      exampleMode: 'hidden',
      usageMode: 'expand',
    },
    {
      name: "Page Components",
      description: "Page Components acts as a replacement to traditional HTML pages. It is recommendede that you prop pass your global state to the widget components from here. This makes functional testing very straight forward since each page is essential a feature.",
      components: "src/pages/**/*.{js,jsx,ts,tsx}",
      exampleMode: 'hidden',
      usageMode: 'expand',
    },
    {
      name: "Utilities and Services",
      description: "These modules exist to support the React Application.",
      components: "src/[!{core|pages|widgets}]*/**/*.{js,jsx,ts,tsx}",
      exampleMode: 'hidden',
      usageMode: 'expand',
    },
  ],
  ignore: [
    "**/__tests__/**",
    "**/*.test.{js,jsx,ts,tsx}",
    "**/*.spec.{js,jsx,ts,tsx}",
    "**/*.d.ts",
    "node_modules/**",
    "build/**",
    "**/index.tsx",
    "**/setupTests.js",
    "**/reportWebVitals.js",
  ],
};
