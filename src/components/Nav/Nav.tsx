import React, { EventHandler } from "react";
import { Menu } from "antd";
import { history } from "../../utils";
import { IconBaseProps } from "@ant-design/icons/lib/components/Icon";
import './Nav.less';

interface TabConfig {
  key: string,
  title: string,
  path: string,
  externalPath?: boolean;
  icon?: IconBaseProps,
  disabled?: boolean,
};

interface NavProps {
  branding: string,
  tabItems: Array<TabConfig>
  currentTab?: string
};

const Nav: React.FC<NavProps> = ({ branding, tabItems, currentTab = "" }) => {
  const handleClick = (key: string, path: string, externalPath: boolean = false): EventHandler<any> => (e: MouseEvent): void => {
    if (!externalPath) {
      history.push(path);
    } else {
      window.open(path, '_blank', 'noopener');
    }
  };

  return (
    <Menu selectedKeys={[currentTab]} mode="horizontal" className="nav">
      <span className="nav__branding">{branding}</span>
      {tabItems.map((tabItem: TabConfig) => {
        return (
          <Menu.Item
            onClick={handleClick(tabItem.key, tabItem.path, tabItem.externalPath)}
            key={tabItem.key}
            icon={tabItem.icon ? tabItem.icon : null}
            disabled={tabItem.disabled ? true : false}
          >
            {tabItem.title}
          </Menu.Item>);
      })}
    </Menu>
  );
};

export default Nav;
export type { TabConfig };
