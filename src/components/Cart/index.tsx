import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { addItem, removeItem, clearCart } from '../../store/cartSlice';
import { Container, Item, Button } from './styles';

const Cart: React.FC = () => {
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Container>
        <h2>Carrinho</h2>
        {items.length === 0 ? (
            <p>Seu carrinho está vazio</p>
        ) : (
            <ul>
            {items.map(item => (
                <Item key={item.id}>
                {item.name}
                <Button onClick={() => dispatch(removeItem(item.id))}>
                    Remover
                </Button>
                </Item>
            ))}
            </ul>
        )}
        <Button onClick={() => dispatch(addItem({ id: Date.now(), name: 'Novo Produto' }))}>
            Adicionar Produto
        </Button>
        <Button onClick={() => dispatch(clearCart())}>
            Limpar Carrinho
        </Button>
        </Container>
    );
};

export default Cart;