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
  appState,
} from '../../redux/reduxCounter';

const CounterDemoPage: React.FC = () => {
  const updateReduxState = (value: number = 0, reset:boolean = false) => {
    if (reset)
      store.dispatch(counterSlice.actions.reset());
    else
      store.dispatch(counterSlice.actions.increment({ value: value }));
  }
  return (<div>
    <Badge count={useSelector((state: appState) => state.count)}>
      <Alert message="Redux is pre-configured with redux-toolkit" type="info"></Alert>
    </Badge>
    <br />
    <br />
    <Counter countChangeFunction={updateReduxState} />
  </div>);
}

export default CounterDemoPage;
