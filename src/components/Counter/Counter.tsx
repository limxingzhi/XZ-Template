import React from 'react';
import { useSelector } from 'react-redux';

import {
  Button,
  Card,
  Space,
  Badge,
} from 'antd';

import {
  CaretUpOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';

import {
  store,
  counterSlice,
} from '../../redux/counter';

import './Counter.less';

const Counter: React.FC = () => {
  const incrementHandler = (increment: boolean) => (e: React.MouseEvent): void => {
    e.preventDefault();
    store.dispatch(increment ? counterSlice.actions.increment({ value: 1 }) : counterSlice.actions.decrement({ value: 1 }));
  }

  const resetHandler = (e: React.MouseEvent): void => {
    e.preventDefault();
    store.dispatch(counterSlice.actions.reset());
  }

  return (<>
    <Badge count={useSelector(state=>state)}>
      <Card title="Redux Counter" className="counter__card" style={{ width: 200 }} hoverable>
        <Space size="large">
          <Space size="small">
            <Button onClick={incrementHandler(true)} size="small" shape="circle"><CaretUpOutlined /></Button>
            <Button onClick={incrementHandler(false)} size="small" shape="circle"><CaretDownOutlined /></Button>
          </Space>
          <Button onClick={resetHandler} size="small" >Reset</Button>
        </Space>
      </Card>
    </Badge>
  </>);
}

export default Counter;
