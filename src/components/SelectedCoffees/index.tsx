import styles from './SelectedCoffees.module.scss';
import { Trash } from 'phosphor-react';
import Button from '../Button';
import { useContext, useState } from 'react';
import { CartContext, ICartItens } from '../../providers/CartContext';

const SelectedCoffess = ({ coffee }: { coffee: ICartItens }) => {
  const { removeCartItem } = useContext(CartContext);

  return (
    <div key={`coffee-${coffee.id}`} className={styles.coffeeContainer}>
      <img src={coffee.image} />
      <div className={styles.coffeeInfo}>
        <p className={styles.coffeeType}>{coffee.name}</p>
        <div className={styles.buttonsContainer}>
          <Button quantity={coffee.quantity} itemId={coffee.id} />
          <button
            onClick={() => removeCartItem(coffee.id)}
            className={styles.removeBtn}
          >
            <Trash size={16} weight='bold' />
            <p>REMOVER</p>
          </button>
        </div>
      </div>
      <span>R$ {coffee.price}</span>
    </div>
  );
};

export default SelectedCoffess;
