import React, { lazy } from 'react';
import Template from './Template';

const Demo = lazy(() => import('./DemoPage/DemoPage'));
const DemoTwo = lazy(() => import('./DemoTwoPage/DemoTwoPage'));

const DemoPage = () => <Template title="This is page one">
  <Demo />
</Template>;

const DemoTwoPage = () => <Template title="I am page two">
  <DemoTwo />
</Template>;

export {
  DemoPage,
  DemoTwoPage,
 };
