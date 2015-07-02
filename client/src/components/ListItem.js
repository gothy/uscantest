import React from 'react';

const ListItem = React.createClass({
  render() {
    let item = this.props.item;

    return (
      <li className="ListItem">
        <label>
          <input type="checkbox" checked={item.marked}
            className="ListItem__markItem"
            onChange={this.props.markItem.bind(null, item.id)} />
          {' '}
          <span className="ListItem__title">{item.title}{item.fav ? '*' : ''}</span>
        </label>
        {' '}
        <input type="checkbox" checked={item.fav}
          className="ListItem__favItem"
          onChange={this.props.favItem.bind(null, item.id)} /> {' '}
        <button className="ListItem__delItem"
          onClick={this.props.delItem.bind(null, item.id)}>del</button>
      </li>
    );
  }
});

export default ListItem;
