import * as aTypes from '../aconst';

let initialState = {
  items: [
    { id: 1, title: 'alt', fav: false, marked: false },
    { id: 2, title: 'reflux', fav: false, marked: false },
    { id: 3, title: 'fluxy', fav: false, marked: false },
    { id: 4, title: 'flummox', fav: false, marked: false },
    { id: 5, title: 'fluxible', fav: false, marked: false },
    { id: 6, title: 'redux', fav: false, marked: false },
    { id: 7, title: 'marty', fav: false, marked: false },
  ],
};

let actionHandlers = {
  [aTypes.MARK_ITEM]: (state, action) => {
    let items = state.items.map(item => {
      return item.id === action.id ? { ...item, marked: !item.marked } : item;
    });

    return { items: items };
  },

  [aTypes.FAV_ITEM]: (state, action) => {
    let items = state.items.map(item => {
      return item.id === action.id ? { ...item, fav: !item.fav } : item;
    });

    return { items: items };
  },

  [aTypes.DEL_ITEM]: (state, action) => {
    let items = state.items.filter(item => item.id !== action.id);

    return { items: items };
  },

  [aTypes.FAV_MARKED_ITEMS]: (state, action) => {
    let items = state.items.map(item => item.marked ? { ...item, fav: true} : item);

    return { items: items };
  },

  [aTypes.DEL_MARKED_ITEMS]: (state, action) => {
    let items = state.items.filter(item => !item.marked);

    return { items: items };
  },

};

// the Store signature is (state, action) => state,
// and the state shape is up to you: you can use primitives,
// objects, arrays, or even ImmutableJS objects.
export default function store(state = initialState, action) {

  let handler = actionHandlers[action.type];
  if (handler) {
    return { ...state, ...handler(state, action) };
  } else {
    return state;
  }
}
