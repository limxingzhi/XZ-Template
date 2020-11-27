import React, { Suspense } from "react";
import {
  PageHeader,
  Skeleton,
} from "antd";
import "./Template.less";

interface Props {
  children: JSX.Element | JSX.Element[],
  title?: string,
  callback?: Function | undefined,
}

const Template: React.FC<Props> = ({ children, title = "", callback }) => {
  if (title) document.title = title;
  if (callback) callback();
  return (
    <>
      <PageHeader title={title} className="page-template-header" />
      <div className="page-template-container">
        <Suspense fallback={<Skeleton active />}>{children}</Suspense>
      </div>
    </>
  );
};

export default Template;
export type { Props };
