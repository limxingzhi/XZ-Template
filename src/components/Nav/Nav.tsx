import React, { EventHandler } from "react";
import { Menu, } from "antd";
import { history } from "../../utils";
import { IconBaseProps } from "@ant-design/icons/lib/components/Icon";

interface NavConfig {
  key: string,
  title: string,
  path: string,
  externalPath?: boolean;
  icon?: IconBaseProps,
  disabled?: boolean,
};

interface NavProps {
  config: Array<NavConfig>
  currentTab?: string
};

const Nav: React.FC<NavProps> = ({ config, currentTab = "" }) => {
  const handleClick = (key: string, path: string, externalPath: boolean = false): EventHandler<any> => (e: MouseEvent): void => {
    if (!externalPath) {
      history.push(path);
    } else {
      window.open(path, '_blank', 'noopener');
    }
  };

  return (
    <Menu selectedKeys={[currentTab]} mode="horizontal">
      {config.map((menuItem: NavConfig) => {
        return (
          <Menu.Item
            onClick={handleClick(menuItem.key, menuItem.path, menuItem.externalPath)}
            key={menuItem.key}
            icon={menuItem.icon ? menuItem.icon : null}
            disabled={menuItem.disabled ? true : false}
          >
            {menuItem.title}
          </Menu.Item>);
      })}
    </Menu>
  );
};

export default Nav;
export type { NavConfig };
