import React from 'react';
import { Menu, } from "antd";
import { CoffeeOutlined, } from '@ant-design/icons';

const { SubMenu } = Menu;

const MySubMenu:React.FC = (props) => (
  <SubMenu {...props} key="sub1" title="subnav 1" icon={<CoffeeOutlined />}>
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
);

export default MySubMenu;
