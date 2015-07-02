import * as aTypes from '../aconst';

export function markItem(id) {
  return {
    type: aTypes.MARK_ITEM,
    id: id
  };
}

export function favItem(id) {
  return {
    type: aTypes.FAV_ITEM,
    id: id
  };
}

export function delItem(id) {
  return {
    type: aTypes.DEL_ITEM,
    id: id
  };
}

export function favMarked() {
  return {
    type: aTypes.FAV_MARKED_ITEMS
  };
}

export function delMarked(ids) {
  return {
    type: aTypes.DEL_MARKED_ITEMS
  };
}
