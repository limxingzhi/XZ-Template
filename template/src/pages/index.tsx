import React, { lazy } from 'react';
import Template from './Template';

interface PageProps {
  renderCallback?: Function,
  mountCallback?: Function,
}

const Demo = lazy(() => import('./DemoPage/DemoPage'));
const CounterDemo = lazy(() => import('./CounterDemoPage/CounterDemoPage'));

const DemoPage: React.FC<PageProps> = ({ renderCallback, mountCallback }) => (
  <Template title="Welcome" renderCallback={renderCallback} mountedCallback={mountCallback}>
    <Demo />
  </Template>
);

const CounterDemoPage: React.FC<PageProps> = ({ renderCallback, mountCallback }) => (
  <Template title="I am page two" renderCallback={renderCallback} mountedCallback={mountCallback}>
    <CounterDemo />
  </Template>
);

export {
  DemoPage,
  CounterDemoPage,
};
