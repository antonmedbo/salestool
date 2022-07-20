import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    return (
      <div className="container main-content">
        {/* for each loop */}
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
      </div>
    );
  }
}

export default ProductList;