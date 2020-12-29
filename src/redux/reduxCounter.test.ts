import configureStore from 'redux-mock-store';
import { counterSlice, defaultState } from './reduxCounter';

const mockStore = configureStore();
const store = mockStore();

describe('Redux Global State', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });

  // This test makes sure the correct action object is generated
  // https://www.digitalocean.com/community/tutorials/react-testing-redux-actions
  test('Correct action object is generated', () => {
    const expectedActions = [
      {
        'payload': undefined,
        'type': 'counter/reset',
      },
      {
        'payload': {value:1},
        'type': 'counter/increment',
      },
      {
        'payload': {value:-1},
        'type': 'counter/increment',
      },
    ];
    store.dispatch(counterSlice.actions.reset());
    store.dispatch(counterSlice.actions.increment({value:1}));
    store.dispatch(counterSlice.actions.increment({value:-1}));
    expect(store.getActions()).toEqual(expectedActions);
  });

  // This test suite tests all our reducers
  // https://www.digitalocean.com/community/tutorials/react-testing-redux-reducers
  describe('Reducers are working correctly', () => {

    // This test makes sure the initial state is correct
    test('Initial state is correct', () => {
      const action = { type: 'dummy_action' };
      expect(counterSlice.reducer(undefined, action)).toEqual(defaultState);
    });

    test('increment by positive value', () => {
      const action = counterSlice.actions.increment({ value: 1 });
      expect(counterSlice.reducer(undefined, action)).toMatchSnapshot();
    });

    test('increment by negative value', () => {
      const action = counterSlice.actions.increment({ value: -1 });
      expect(counterSlice.reducer(undefined, action)).toMatchSnapshot();
    });

    test('reset value', () => {
      const action = counterSlice.actions.reset();
      expect(counterSlice.reducer(undefined, action)).toMatchSnapshot();
    });
  });
});
