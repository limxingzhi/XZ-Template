import React from 'react';
import { Menu, } from "antd";
import { CoffeeOutlined, RocketOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

// we want the Menu component to apply props over the
// SubMenu components, which is why this has to return
// an array of JSX elements instead of a FC component
const MySubMenu: JSX.Element[] = [
  <SubMenu key="sub1" title="subnav 1" icon={<CoffeeOutlined />}>
    <Menu.Item key="1">option 1</Menu.Item>
    <Menu.Item key="2">option 2</Menu.Item>
    <Menu.Item key="3">option 3</Menu.Item>
    <Menu.Item key="4">option 4</Menu.Item>
    <Menu.Item key="5">option 5</Menu.Item>
    <Menu.Item key="6">option 6</Menu.Item>
    <Menu.Item key="7">option 7</Menu.Item>
    <Menu.Item key="8">option 8</Menu.Item>
    <Menu.Item key="9">option 9</Menu.Item>
    <Menu.Item key="10">option 10</Menu.Item>
  </SubMenu>
  ,
  <SubMenu key="sub2" title="subnav 2" icon={<RocketOutlined />}>
    <Menu.Item key="11">option 11</Menu.Item>
    <Menu.Item key="12">option 12</Menu.Item>
    <Menu.Item key="13">option 13</Menu.Item>
    <Menu.Item key="14">option 14</Menu.Item>
    <Menu.Item key="15">option 15</Menu.Item>
    <Menu.Item key="16">option 16</Menu.Item>
    <Menu.Item key="17">option 17</Menu.Item>
    <Menu.Item key="18">option 18</Menu.Item>
    <Menu.Item key="19">option 19</Menu.Item>
    <Menu.Item key="20">option 20</Menu.Item>
  </SubMenu>
];

export default MySubMenu;
