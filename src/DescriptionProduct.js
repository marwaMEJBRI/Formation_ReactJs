import React from 'react';
import ListProduct from './ListProduct';
import {useParams} from 'react-router-dom';

const DescriptionProduct = () => {
    const params = useParams();

   const product = ListProduct.find(el=>params.productID === (el.id).toString())
  return (
    <div>
        <p>{product.name} : {product.description}</p>
    </div>
  )
}

export default DescriptionProduct