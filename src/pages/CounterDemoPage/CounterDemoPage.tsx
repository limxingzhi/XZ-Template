import React from 'react';
import {
  Badge,
  Alert,
} from 'antd';
import { useSelector } from 'react-redux';

import {
  Counter,
} from '../../components';

import {
  store,
  counterSlice,
} from '../../redux/counter';

const CounterDemoPage: React.FC = () => {
  const updateReduxState = (increment: 'increase' | 'decrease' | 'reset') => {
    if (increment === 'increase')
      store.dispatch(counterSlice.actions.increment({ value: 1 }));
    else if (increment === 'decrease')
      store.dispatch(counterSlice.actions.decrement({ value: 1 }));
    else if (increment === 'reset')
      store.dispatch(counterSlice.actions.reset());
  }
  return (<div>
    <Badge count={useSelector(state => state)}>
      <Alert message="Redux is pre-configured with redux-toolkit" type="info"></Alert>
    </Badge>
    <br />
    <br />
    <Counter countChangeFunction={updateReduxState} />
  </div>);
}

export default CounterDemoPage;
