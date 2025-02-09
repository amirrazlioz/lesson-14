import React from 'react'
import Product from "./Product"

export default function ProductList({ products = [] }) {
  return (
    <div>
      {products.map((product, index) => (
        <Product key={index} name={product.name} price={product.price} />
      ))}
    </div>
  );
}
