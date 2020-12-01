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
  mountedCallback?: Function | undefined,
}

const Template: React.FC<Props> = ({ children, title = "", renderCallback, mountedCallback }) => {
  useEffect(()=> {
    if (mountedCallback) mountedCallback();
  });
  useEffect(()=> {
    if (title !== '') changeDocumentTitle(title);
    if (renderCallback) renderCallback();
  }, [title, children, renderCallback, mountedCallback]);
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
