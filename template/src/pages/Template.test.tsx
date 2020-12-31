import React from 'react';
import { unmountComponentAtNode, render } from "react-dom";
import TestRenderer, {act} from 'react-test-renderer';
import pretty from "pretty";
import Template from './Template';
import { PageHeader } from 'antd';

let container : HTMLElement;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

describe("Page Template", ()=> {
  test('default render with one children matches snapshot', () => {
    render(<Template><div /></Template>, container);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  test('passing in multiple children matches snapshot', () => {
    render(<Template>
      <div key="1"/>
      <span key="2" />
    </Template>, container);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  describe("props behave correctly", ()=> {
    test('title prop is reflected correctly', ()=> {
      const title= `I am a title`;
      const testRenderer = TestRenderer.create(<Template title={title}><div key="1"/></Template>);
      const testInstance = testRenderer.root;
      expect(testInstance.findByType(PageHeader).props.title).toBe(title);
    });

    test('renderCallback is called when prop changes', async ()=> {
      const fn = jest.fn();
      const title= `I am a title`;
      const testRenderer = TestRenderer.create(<Template renderCallback={fn} title={title}>
        <div key="1"/>
      </Template>);

      act(() => {
        testRenderer.update(<Template renderCallback={fn} title={title + ' updated'}>
          <div key="1"/>
        </Template>);
      });
      expect(fn).toHaveBeenCalledTimes(2);
    });

    test('renderCallbackCleanup is called when prop changes', ()=> {
      const fn = jest.fn();
      const title= `I am a title`;
      const testRenderer = TestRenderer.create(<Template renderCallbackCleanup={fn} title={title}>
        <div key="1"/>
      </Template>);

      act(()=> {
        testRenderer.update(<Template renderCallbackCleanup={fn} title={title + ' updated'}>
          <div key="1"/>
        </Template>);
      });
      expect(fn).toHaveBeenCalledTimes(1);
    });

    test('mountedCallback is called only once', async ()=> {
      const fn = jest.fn();
      const title= `I am a title`;
      const testRenderer = TestRenderer.create(<Template mountedCallback={fn} title={title}>
        <div key="1"/>
      </Template>);

      act(()=> {
        testRenderer.update(<Template mountedCallback={fn} title={title + ' updated'}>
          <div key="1"/>
        </Template>);
      });
      expect(fn).toHaveBeenCalledTimes(1);
    });

    test('mountedCallbackCleanup is called when component is removed', async ()=> {
      const fn = jest.fn();
      const title= `I am a title`;
      const testRenderer = TestRenderer.create(<div><Template mountedCallbackCleanup={fn} title={title}>
        <div key="1"/>
      </Template></div>);

      expect(fn).toHaveBeenCalledTimes(0);

      act(()=> {
        testRenderer.update(<div><Template mountedCallbackCleanup={fn} title={title + ' updated'}>
          <div key="1"/>
        </Template></div>);
      });
      expect(fn).toHaveBeenCalledTimes(0);

      act(()=> {
        testRenderer.update(<div></div>);
      });
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
});
