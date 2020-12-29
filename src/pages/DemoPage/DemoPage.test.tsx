import React from 'react';
import { unmountComponentAtNode, render } from "react-dom";
import pretty from "pretty";
import DemoPage from './DemoPage';

let container : HTMLElement;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

describe("DemoPage", ()=> {
  test('default render matches snapshot', () => {
    render(<DemoPage/>, container);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
});
