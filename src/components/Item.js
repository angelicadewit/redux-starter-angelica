import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ item, remove }) => (
  <div class="cart-item">
    <h2>{item.product}</h2>
    <span>Quantity: {item.quantity}</span> <br />
    <button onClick={() => remove(item)}>Remove</button>
  </div>
);

Item.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.string,
    quantity: PropTypes.number
  }),
  remove: PropTypes.func
};

export default Item;
