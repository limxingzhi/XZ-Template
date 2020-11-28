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
  CoffeeOutlined,
} from '@ant-design/icons';
import { IconBaseProps } from "@ant-design/icons/lib/components/Icon";
import './Layout.less';

const { Title } = Typography;
const { SubMenu } = Menu;
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
  currentTab?: string
};

const Layout: React.FC<NavProps> = ({ brandingImageURL, children, branding, tabItems, currentTab = "" }) => {
  const [siderCollapse, setSiderCollapse] = useState(false);
  const brandingItem = (brandingImageURL)
    ? <img className="ant-menu-item nav__branding-img" src={brandingImageURL} alt={branding} />
    : <Title level={3} className="nav__branding">{branding}</Title>;

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
      <Sider collapsed={siderCollapse} width={220}>
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
          <SubMenu key="sub1" title="subnav 1" icon={<CoffeeOutlined />}>
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
            <Menu.Item key="13">option13</Menu.Item>
            <Menu.Item key="14">option14</Menu.Item>
            <Menu.Item key="15">option15</Menu.Item>
            <Menu.Item key="16">option16</Menu.Item>
            <Menu.Item key="17">option17</Menu.Item>
            <Menu.Item key="18">option18</Menu.Item>
            <Menu.Item key="19">option19</Menu.Item>
            <Menu.Item key="20">option20</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <AntLayout>
        <Header style={{ width: '100%', padding: 0, margin: 0 }}>
          <Menu selectedKeys={[currentTab]} mode="horizontal">
            <Space size="large">
              <Button type="default" onClick={siderCollapseHandler} className="layout__sider-btn">
                {siderCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
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
