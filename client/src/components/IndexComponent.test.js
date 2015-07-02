jest.dontMock('./IndexComponent');
jest.dontMock('../stores');

import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

import { createDispatcher, createRedux, composeStores } from 'redux';
import { Provider } from 'redux/react';

const stores = require('../stores');
const IndexComponent = require('./IndexComponent');
const ListItem = require('./ListItem');

const dispatcher = createDispatcher(composeStores(stores));
const redux = createRedux(dispatcher);

describe('IndexComponent', () => {
  let root, favMarkedSpy, delMarkedSpy;

  beforeEach(() => {
    favMarkedSpy = spyOn(IndexComponent.prototype.__reactAutoBindMap, 'favMarked');
    delMarkedSpy = spyOn(IndexComponent.prototype.__reactAutoBindMap, 'delMarked');
    root = TestUtils.renderIntoDocument(
      <Provider redux={redux}>
        {() =>
          <IndexComponent ref="index"/>
        }
      </Provider>
    );
  });

  it('should render', () => {
    let instance = root.refs.index;
    expect(instance).toBeDefined();
    let h1 = TestUtils.findRenderedDOMComponentWithTag(instance, 'h1');
    expect(h1).toBeDefined();
    expect(React.findDOMNode(h1).innerHTML).toEqual('YouScan test');

    let items = TestUtils.scryRenderedComponentsWithType(instance, ListItem);
    expect(items).toBeDefined();
    expect(items.length).toEqual(4);

    let buttons = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'button');
    expect(buttons).toBeDefined();
    expect(buttons.length).toEqual(2);
  });

  it('should react on button clicks', () => {
    let instance = root.refs.index;
    let buttons = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'button');
    TestUtils.Simulate.click(React.findDOMNode(buttons[0]));
    expect(favMarkedSpy).toHaveBeenCalled();

    TestUtils.Simulate.click(React.findDOMNode(buttons[1]));
    expect(delMarkedSpy).toHaveBeenCalled();
  });

});
