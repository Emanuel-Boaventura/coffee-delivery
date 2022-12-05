import { Minus, Plus } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CartContext } from '../../providers/CartContext';
import styles from './Button.module.scss';

interface IButtonProps {
  updateQuantity: (quantity: number) => void;
}

const Button = ({ updateQuantity }: IButtonProps) => {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity < 20) setQuantity((state) => state + 1);
  }

  function decrement() {
    if (quantity > 0) setQuantity((state) => state - 1);
  }

  function onChange(value: number) {
    if (value > 20) return setQuantity(20);
    if (value < 0) return setQuantity(0);
    setQuantity(value);
  }

  return (
    <div className={styles.groupBtn}>
      <button className={styles.minusBtn} onClick={decrement}>
        <Minus size={16} weight='bold' />
      </button>

      <input
        className={styles.numberInput}
        onChange={(e) => onChange(Number(e.target.value))}
        value={quantity}
        type='number'
      />

      <button className={styles.plusBtn} onClick={increment}>
        <Plus size={16} weight='bold' />
      </button>
    </div>
  );
};

export default Button;
