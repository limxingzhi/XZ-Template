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

/**
 * This Component acts as a wrapper for all Pages, it provides
 * a standardize API for all pages to utilize. I exposed the
 * title prop to set the page title along with 2 life cycle callbacks
 * for initial mount and for every rerender. Both callbacks
 * are implemented via useEffect.
 *
 * @category Template
 * @component
 * @param {(JSX.Element|JSX.Element[])} children The page content to display. This will be used in /src/page/index.tsx
 * @param {string} title Title of the page and window title
 * @param {function} renderCallback Function to call whenever the component renders
 * @param {function} renderCallbackCleanup Cleanup Function to call for component rendering
 * @param {function} mountedCallback Functionto call whenver the component is mounted
 * @param {function} mountedCallbackCleanup Cleanup Functionto call for component mounting
 */
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
