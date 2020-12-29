// useful reads
// https://reactjs.org/docs/testing-recipes.html
// what does act() do https://github.com/mrdulin/react-act-examples/blob/master/sync.md

import React from 'react';
import { unmountComponentAtNode, render } from "react-dom";
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { act } from "react-dom/test-utils";
import { waitFor } from "@testing-library/react";
import { counterSlice, store } from '../../redux/reduxCounter';
import { Badge } from 'antd';
import pretty from "pretty";
import CounterDemoPage from './CounterDemoPage';

let container : HTMLElement;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

  // reset the count for the state
  store.dispatch(counterSlice.actions.reset());
});

describe("CounterDemoPage", ()=> {
  test('default render matches snapshot', () => {
    render(<Provider store={store}>
      <CounterDemoPage/>
    </Provider>, container);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  test('clicking increments updates store correctly', async () => {
    TestRenderer.create(<Provider store={store}>
      <CounterDemoPage/>
    </Provider>);
    const incrementButton = document.querySelector("[data-testid=increment-click]");

    // making sure initial state is 0
    expect(store.getState().count).toBe(0);

    // clicks increment button
    await waitFor(() => {
      incrementButton?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    // waits for half a second for store to be updated before checking the new value
    setTimeout(()=> {
      expect(store.getState().count).toBe(1);
    }, 500);
  });

  test('clicking increments updates badge correctly', async () => {
    const testRenderer = TestRenderer.create(<Provider store={store}>
      <CounterDemoPage/>
    </Provider>);
    const testInstance = testRenderer.root;
    const incrementButton = document.querySelector("[data-testid=increment-click]");

    // making sure badge count is 0
    expect(testInstance.findByType(Badge).props.count).toBe(0);

    // clicks increment button
    await waitFor(() => {
      incrementButton?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    // waits for half a second for store to be updated before checking the new value
    setTimeout(()=> {
      expect(testInstance.findByType(Badge).props.count).toBe(1);
    }, 500);
  });
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
});
