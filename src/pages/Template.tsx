import React, { Suspense, useEffect } from "react";
import {
  PageHeader,
  Skeleton,
} from "antd";
import "./Template.less";
import {
  changeDocumentTitle
} from '../utils';

interface Props {
  children: JSX.Element | JSX.Element[],
  title?: string,
  renderCallback?: Function | undefined,
  renderCallbackCleanup?: Function | undefined,
  mountedCallback?: Function | undefined,
  mountedCallbackCleanup?: Function | undefined,
}

const Template: React.FC<Props> = (props) => {
  const {children, title = "", renderCallback, mountedCallback, renderCallbackCleanup, mountedCallbackCleanup} = props;
  useEffect(()=> {
    if (mountedCallback) mountedCallback();
    if (mountedCallbackCleanup) return ()=> {mountedCallbackCleanup()};
  // eslint-disable-next-line
  }, []);
  useEffect(()=> {
    if (title !== '') changeDocumentTitle(title);
    if (renderCallback) renderCallback();
    if (renderCallbackCleanup) return ()=> {renderCallbackCleanup()};
  });
  return (
    <div className="page-template">
      <PageHeader title={title} className="page-template-header" />
      <div className="page-template__container">
        <Suspense fallback={<Skeleton active />}>{children}</Suspense>
      </div>
    </div>
  );
};

export default Template;
export type { Props };
