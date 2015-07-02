jest.dontMock('./twStore');
jest.dontMock('../aconst');
jest.dontMock('../actions/twActions');

const aTypes = require('../aconst');
const actions = require('../actions/twActions');
const store = require('./twStore');

let fakeState = {
  items: [
    { id: 1, title: 'alt', fav: false, marked: false },
    { id: 2, title: 'reflux', fav: false, marked: false }
  ],
};

let fakeMarkedState = {
  items: [
    { id: 1, title: 'alt', fav: false, marked: true },
    { id: 2, title: 'reflux', fav: false, marked: true }
  ],
};

describe('item store', () => {
  it('should set marked flag on markItem action', () => {
    let state = store(fakeState, actions.markItem(1));
    expect(state).toEqual({
      items: [
        { id: 1, title: 'alt', fav: false, marked: true },
        { id: 2, title: 'reflux', fav: false, marked: false }
      ],
    });
  });

  it('should set fav flag on favItem action', () => {
    let state = store(fakeState, actions.favItem(2));
    expect(state).toEqual({
      items: [
        { id: 1, title: 'alt', fav: false, marked: false },
        { id: 2, title: 'reflux', fav: true, marked: false }
      ],
    });
  });

  it('should remove item on delItem action', () => {
    let state = store(fakeState, actions.delItem(2));
    expect(state).toEqual({
      items: [
        { id: 1, title: 'alt', fav: false, marked: false }
      ],
    });
  });

  it('should set fav flag on favMarked action', () => {
    let state = store(fakeMarkedState, actions.favMarked());
    expect(state).toEqual({
      items: [
        { id: 1, title: 'alt', fav: true, marked: true },
        { id: 2, title: 'reflux', fav: true, marked: true }
      ],
    });
  });

  it('should remove marked on delMarked action', () => {
    let state = store(fakeMarkedState, actions.delMarked());
    expect(state).toEqual({
      items: [],
    });
  });
});
