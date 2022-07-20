import React from 'react';
import sampleImage from '../Images/4FORTY_AIR_MIPS.jpeg';

const ProductRow = (props) => {

  return (
    <div className="row product">
      <div className="col-md-2">
        <img src={sampleImage} alt="Sample Image" height="50" />
      </div>
      <div className="col-md-8 product-detail">
        <h4>test</h4>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="col-md-2 product-price">
        $19.99
      </div>
    </div>
  );
}

export default ProductRow;