import React from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';

import * as actions from '../actions/twActions';
import ListItem from './ListItem';

function selectAll(state) {
  return { ...state.twStore };
}

const IndexComponent = React.createClass({

  favMarked(dispatch) {
    dispatch(actions.favMarked());
  },

  delMarked(dispatch) {
    dispatch(actions.delMarked());
  },

  render() {
    return (
      <section>
        <h1>YouScan test</h1>

        <Connector select={selectAll}>
          { ({ items, dispatch }) =>
            <div>
              <button onClick={this.favMarked.bind(null, dispatch)}>Fav selected</button>
              <button onClick={this.delMarked.bind(null, dispatch)}>Del selected</button>

              <ul className="flux-list">
                {items.map(item => {
                  return (<ListItem key={item.id} item={item}
                    {...bindActionCreators(actions, dispatch)} />);
                })}
              </ul>
            </div>
          }
        </Connector>
      </section>
    );
  }
});

export default IndexComponent;
