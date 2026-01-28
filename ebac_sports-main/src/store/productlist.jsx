import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';

const products = [
  { id: 1, name: 'Camisa do time' },
  { id: 2, name: 'Bola oficial' },
  { id: 3, name: 'Chuteira profissional' },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Produtos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => dispatch(addItem(product))}>
              Adicionar ao Carrinho
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;