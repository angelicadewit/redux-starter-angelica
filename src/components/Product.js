import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ item, add }) => (
  <div class="product">
    <h2>{item.product}</h2>
    <img src={item.src} /><br />
    <button onClick={() => add(item)}>Add</button>
  </div>
);



Product.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.string,
    quantity: PropTypes.number,
    src: PropTypes.string
  }),
  add: PropTypes.func
};

export default Product;
