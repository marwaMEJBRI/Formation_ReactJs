import React from 'react';
import ListProduct from './ListProduct';
import {Link, useNavigate} from 'react-router-dom';

const ProductPage = () => {
  const navigate = useNavigate();
  return (
    <div>
        {ListProduct.map((prod, index)=><Link key={index} to={`/DescriptionProduct/${prod.id}`}>
          <h1>{prod.name} | </h1>
          </Link>)}
          
    </div>
  )
}

export default ProductPage;