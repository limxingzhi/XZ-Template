import React, { lazy } from 'react';
import Template from './Template';

interface PageProps {
  callback?: Function,
}

const Demo = lazy(() => import('./DemoPage/DemoPage'));
const DemoTwo = lazy(() => import('./DemoTwoPage/DemoTwoPage'));

const DemoPage: React.FC<PageProps> = ({ callback }) => (
  <Template title="Welcome" callback={callback}>
    <Demo />
  </Template>
);

const DemoTwoPage: React.FC<PageProps> = ({ callback }) => (
  <Template title="I am page two" callback={callback}>
    <DemoTwo />
  </Template>
);

export {
  DemoPage,
  DemoTwoPage,
};
