// useful reads
// https://reactjs.org/docs/testing-recipes.html
// what does act() do https://github.com/mrdulin/react-act-examples/blob/master/sync.md

import React from 'react';
import { unmountComponentAtNode, render } from "react-dom";
import pretty from "pretty";
import { act } from "react-dom/test-utils";
import Counter from './Counter';

let container : HTMLElement;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

describe("Counter", ()=> {
  test('default render matches snapshot', () => {
    const fn = () => {};
    render(<Counter countChangeFunction={fn}/>, container);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  test('increment and decrement button triggers prop function', () => {
    const fn = jest.fn();
    render(<Counter countChangeFunction={fn}/>, container);

    const incrementButton = document.querySelector("[data-testid=increment-click]");
    const decrementButton = document.querySelector("[data-testid=decrement-click]");

    act(() => {
      incrementButton?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      decrementButton?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(fn).toHaveBeenCalledTimes(2);
  });
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
});
