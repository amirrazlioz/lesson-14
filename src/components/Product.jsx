import React from 'react'

export default function Product(props) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
      <h2>{props.name}</h2>
      <p>Price: ${props.price}</p>
    </div>
  );
}
