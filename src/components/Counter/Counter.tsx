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

/**
 * This Component passes a value to the countChangeFunction. Increment
 * will pass 1, decrement will pass -1, but any number will work.
 *
 * @category Components
 * @component
 * @param {function} countChangeFunction Callback function to invoke whenever the increment or decrement button is pressed
 */
const Counter: React.FC<CounterProps> = ({ countChangeFunction }) => {
  const incrementHandler = (value: number) => (e: React.MouseEvent): void => {
    e.preventDefault();
    countChangeFunction(value);
  }

  const resetHandler = (e: React.MouseEvent): void => {
    e.preventDefault();
    countChangeFunction(0, true);
  }

  return (<>
    <Card title="Redux Counter" className="counter__card" style={{ width: 200 }} hoverable>
      <Space size="large">
        <Space size="small">
          <Button data-testid="increment-click" onClick={incrementHandler(1)} size="small" shape="circle"><CaretUpOutlined /></Button>
          <Button data-testid="decrement-click" onClick={incrementHandler(-1)} size="small" shape="circle"><CaretDownOutlined /></Button>
        </Space>
        <Button onClick={resetHandler} size="small" >Reset</Button>
      </Space>
    </Card>
  </>);
}

export default Counter;
