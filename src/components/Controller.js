import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import Item from './Item';

const Controller = ({ data, items, add, remove }) => (
  <main>
    <h1>Products</h1>
    <div class="products">
      {data.map(item => (
        <Product key={item.product} item={item} add={add} />
      ))}
    </div>
    <hr />
    <h1>Cart</h1>
    <div class="cart">
      {items.map(item => (
        <Item key={item.product} item={item} remove={remove} />
      ))}
    </div>
  </main>
);



Controller.propTypes = {
  data: PropTypes.array,
  items: PropTypes.array,
  add: PropTypes.func,
  remove: PropTypes.func
};

export default Controller;
