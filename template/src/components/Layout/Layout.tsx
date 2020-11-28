import React, { EventHandler } from "react";
import {
  Layout as AntLayout,
  Menu,
  Space,
} from "antd";
import { history } from "../../utils";
import { IconBaseProps } from "@ant-design/icons/lib/components/Icon";
import './Layout.less';

const { Header, Content, /* Sider */ } = AntLayout;

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
  brandingImageURL?: string,
  tabItems: Array<TabConfig>,
  children?: JSX.Element | JSX.Element[],
  currentTab?: string
};

const Layout: React.FC<NavProps> = ({ brandingImageURL, children, branding, tabItems, currentTab = "" }) => {
  const brandingItem = (brandingImageURL)
    ? <img className="ant-menu-item nav__branding-img" src={brandingImageURL} alt={branding} />
    : <span className="nav__branding">{branding}</span>;

  const handleClick = (key: string, path: string, externalPath: boolean = false): EventHandler<any> => (e: MouseEvent): void => {
    if (!externalPath) {
      history.push(path);
    } else {
      window.open(path, '_blank', 'noopener');
    }
  };

  return (
    <AntLayout>
      <Header>
        <Menu theme="dark" selectedKeys={[currentTab]} mode="horizontal">
          <Space size="large">
            {brandingItem}
            <span />
          </Space>
          {
            tabItems.map((tabItem: TabConfig) => (
              <Menu.Item
                onClick={handleClick(tabItem.key, tabItem.path, tabItem.externalPath)}
                key={tabItem.key}
                icon={tabItem.icon ? tabItem.icon : null}
                disabled={tabItem.disabled ? true : false}
              >
                {tabItem.title}
              </Menu.Item>
            ))
          }
        </Menu>
      </Header>
      <AntLayout>
        <Content>
          {children}
        </Content>
      </AntLayout>
    </AntLayout>

  );
};

export default Layout;
export type { TabConfig };
