import React, { EventHandler, MouseEvent, useState } from "react";
import {
  Layout as AntLayout,
  Menu,
  Space,
  Button,
  Typography,
} from "antd";
import { history } from "../../utils";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { IconBaseProps } from "@ant-design/icons/lib/components/Icon";
import './Layout.less';

const { Title } = Typography;
const { Header, Content, Sider } = AntLayout;

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
  siderMenu?: JSX.Element | JSX.Element[],
  currentTab?: string
};

const Layout: React.FC<NavProps> = ({ siderMenu, brandingImageURL, children, branding, tabItems, currentTab = "" }) => {
  const [siderCollapse, setSiderCollapse] = useState(true);
  const brandingItem = (brandingImageURL)
    ? <img className="ant-menu-item nav__branding-img" src={brandingImageURL} alt={branding} />
    : <Title level={4} className="nav__branding">{branding}</Title>;

  const siderCollapseHandler = (): void => {
    setSiderCollapse(!siderCollapse);
  }

  const handleTabClick = (key: string, path: string, externalPath: boolean = false): EventHandler<any> => (e: MouseEvent): void => {
    if (!externalPath) {
      history.push(path);
    } else {
      window.open(path, '_blank', 'noopener');
    }
  };

  return (
    <AntLayout className="nav">
      {siderMenu
        ? <Sider collapsed={siderCollapse} width={220}>
          <Menu
            mode="inline"
            style={{
              height: '100%',
              width: 'auto',
              borderRight: 0,
              overflowY: 'auto',
              overflowX: 'hidden',
            }}
          >
            {siderMenu}
          </Menu>
        </Sider>
        : null
      }
      <AntLayout>
        <Header style={{ width: '100%', padding: 0, margin: 0 }}>
          <Menu selectedKeys={[currentTab]} mode="horizontal">
            <Space size="large">
              <span />
              {
                siderMenu
                  ? <Button type="default" onClick={siderCollapseHandler}>
                    {siderCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  </Button>
                  : null
              }
              {brandingItem}
              <span />
            </Space>
            {
              tabItems.map((tabItem: TabConfig) => (
                <Menu.Item
                  onClick={handleTabClick(tabItem.key, tabItem.path, tabItem.externalPath)}
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
        <Content>
          {children}
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
export type { TabConfig };
