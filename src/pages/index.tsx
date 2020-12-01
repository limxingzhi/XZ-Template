import React, { lazy } from 'react';
import Template from './Template';

interface PageProps {
  callback?: Function,
}

const Demo = lazy(() => import('./DemoPage/DemoPage'));
const CounterDemo = lazy(() => import('./CounterDemoPage/CounterDemoPage'));

const DemoPage: React.FC<PageProps> = ({ callback }) => (
  <Template title="Welcome" callback={callback}>
    <Demo />
  </Template>
);

const CounterDemoPage: React.FC<PageProps> = ({ callback }) => (
  <Template title="I am page two" callback={callback}>
    <CounterDemo />
  </Template>
);

export {
  DemoPage,
  CounterDemoPage,
};
