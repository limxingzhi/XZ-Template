import React from 'react';
import { Menu, } from "antd";
import { CoffeeOutlined, RocketOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

// we want the Menu component to apply props over the
// SubMenu components, which is why this has to return
// an array of JSX elements instead of a FC component
const MySubMenu: JSX.Element[] = [
  <SubMenu key="sub1" title="selection 1" icon={<CoffeeOutlined />}>
    <Menu.Item key="1">dumb item 1</Menu.Item>
    <Menu.Item key="2">dumb item 2</Menu.Item>
    <Menu.Item key="3">dumb item 3</Menu.Item>
    <Menu.Item key="4">dumb item 4</Menu.Item>
    <Menu.Item key="5">dumb item 5</Menu.Item>
    <Menu.Item key="6">dumb item 6</Menu.Item>
    <Menu.Item key="7">dumb item 7</Menu.Item>
    <Menu.Item key="8">dumb item 8</Menu.Item>
    <Menu.Item key="9">dumb item 9</Menu.Item>
    <Menu.Item key="10">dumb item 10</Menu.Item>
  </SubMenu>
  ,
  <SubMenu key="sub2" title="selection 2" icon={<RocketOutlined />}>
    <Menu.Item key="11">dumb item 11</Menu.Item>
    <Menu.Item key="12">dumb item 12</Menu.Item>
    <Menu.Item key="13">dumb item 13</Menu.Item>
    <Menu.Item key="14">dumb item 14</Menu.Item>
    <Menu.Item key="15">dumb item 15</Menu.Item>
    <Menu.Item key="16">dumb item 16</Menu.Item>
    <Menu.Item key="17">dumb item 17</Menu.Item>
    <Menu.Item key="18">dumb item 18</Menu.Item>
    <Menu.Item key="19">dumb item 19</Menu.Item>
    <Menu.Item key="20">dumb item 20</Menu.Item>
  </SubMenu>
];

export default MySubMenu;
