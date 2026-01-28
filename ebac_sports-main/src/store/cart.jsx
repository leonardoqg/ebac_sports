import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../store/cartSlice';

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Carrinho</h2>
      {items.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name}
                <button onClick={() => dispatch(removeItem(item.id))}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => dispatch(clearCart())}>Limpar Carrinho</button>
        </>
      )}
    </div>
  );
}

export default Cart;