import React, { EventHandler, useState } from "react";
import { Menu, } from "antd";
import { history } from "../../utils";
import { IconBaseProps } from "@ant-design/icons/lib/components/Icon";

interface NavConfig {
  key: string,
  title: string,
  path: string,
  externalPath?: boolean;
  icon?: IconBaseProps,
};

interface NavProps {
  config: Array<NavConfig>
  currentTab?: string
};

const Nav: React.FC<NavProps> = ({ config, currentTab = "" }) => {
  const [current, setCurrent] = useState(currentTab);

  const handleClick = (key: string, path: string, externalPath: boolean = false): EventHandler<any> => (e: MouseEvent): void => {
    if (!externalPath) {
      setCurrent(key);
      history.push(path);
    } else {
      window.open(path, '_blank', 'noopener');
    }
  };

  return (
    <Menu selectedKeys={[current]} mode="horizontal">
      {config.map((menuItem: NavConfig) => {
        return (
          <Menu.Item
            onClick={handleClick(menuItem.key, menuItem.path, menuItem.externalPath)}
            key={menuItem.key}
            icon={menuItem.icon ? menuItem.icon : null}
          >
            {menuItem.title}
          </Menu.Item>);
      })}
    </Menu>
  );
};

export default Nav;
export type { NavConfig };
