jest.dontMock('./ListItem');

import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

const ListItem = require('./ListItem');

describe('ListItem', () => {
  let favItem, markItem, delItem;

  beforeEach(() => {
    favItem = jest.genMockFunction();
    markItem = jest.genMockFunction();
    delItem = jest.genMockFunction();
  });

  function _renderItem(item) {
    return TestUtils.renderIntoDocument(<ListItem
      key={item.id} item={item}
      favItem={favItem} markItem={markItem} delItem={delItem}
    />);
  }

  it('should render', () => {
    let item = { id: 1, title: 'hey', fav: false, marked: false };
    let instance = _renderItem(item);

    expect(instance).toBeDefined();
    expect(React.findDOMNode(instance).className).toBe('ListItem');

    let title = TestUtils.findRenderedDOMComponentWithClass(instance, 'ListItem__title');
    expect(React.findDOMNode(title).textContent).toBe('hey');
  });

  it('should render star(*) when favourited', () => {
    let item = { id: 1, title: 'hey', fav: true, marked: false };
    let instance = _renderItem(item);

    let title = TestUtils.findRenderedDOMComponentWithClass(instance, 'ListItem__title');
    expect(React.findDOMNode(title).textContent).toBe('hey*');
  });

  it('should react on user actions', () => {
    let item = { id: 1, title: 'hey', fav: false, marked: false };
    let instance = _renderItem(item);

    let favBox = TestUtils.findRenderedDOMComponentWithClass(instance, 'ListItem__favItem');
    TestUtils.Simulate.change(React.findDOMNode(favBox));
    expect(favItem.mock.calls.length).toBe(1);

    let markBox = TestUtils.findRenderedDOMComponentWithClass(instance, 'ListItem__markItem');
    TestUtils.Simulate.change(React.findDOMNode(markBox));
    expect(markItem.mock.calls.length).toBe(1);

    let delBtn = TestUtils.findRenderedDOMComponentWithClass(instance, 'ListItem__delItem');
    TestUtils.Simulate.click(React.findDOMNode(delBtn));
    expect(delItem.mock.calls.length).toBe(1);
  });

});
