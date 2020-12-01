import React from 'react';

import {
  Button,
  Card,
  Space,
} from 'antd';

import {
  CaretUpOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';

import './Counter.less';

interface CounterProps {
  countChangeFunction: Function
}

const Counter: React.FC<CounterProps> = ({ countChangeFunction }) => {
  const incrementHandler = (increment: boolean) => (e: React.MouseEvent): void => {
    e.preventDefault();
    countChangeFunction(increment ? 'increase' : 'decrease');
  }

  const resetHandler = (e: React.MouseEvent): void => {
    e.preventDefault();
    countChangeFunction('reset')
  }

  return (<>
    <Card title="Redux Counter" className="counter__card" style={{ width: 200 }} hoverable>
      <Space size="large">
        <Space size="small">
          <Button onClick={incrementHandler(true)} size="small" shape="circle"><CaretUpOutlined /></Button>
          <Button onClick={incrementHandler(false)} size="small" shape="circle"><CaretDownOutlined /></Button>
        </Space>
        <Button onClick={resetHandler} size="small" >Reset</Button>
      </Space>
    </Card>
  </>);
}

export default Counter;
