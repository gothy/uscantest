let initialState = {
  items: [
    { id: 1, title: 'alt', fav: false, marked: false },
    { id: 2, title: 'reflux', fav: false, marked: false },
    { id: 3, title: 'fluxy', fav: false, marked: false },
    { id: 4, title: 'flummox', fav: false, marked: false }
  ],
};

export default function store(state = initialState, action) {
  return state;
}
