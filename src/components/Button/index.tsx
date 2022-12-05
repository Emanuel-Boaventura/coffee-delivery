import { Minus, Plus } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CartContext } from '../../providers/CartContext';
import styles from './Button.module.scss';

const Button = () => {
  const [value, setValue] = useState(1);
  const { cartItens, addItemCart } = useContext(CartContext);

  function verifyValue(value: number) {
    if (value > 20) setValue(20);
    if (value < 0) setValue(0);
  }

  function decrement() {
    if (value > 20) {
      setValue(20);
      return;
    } else if (value <= 1) {
      setValue(1);
      return;
    } else {
      setValue(value - 1);
    }
  }

  function increment() {
    if (value >= 20) {
      setValue(20);
      return;
    } else if (value < 1) {
      setValue(1);
      return;
    } else {
      addItemCart();
      setValue(value + 1);
    }
  }
  return (
    <div className={styles.groupBtn}>
      <button className={styles.minusBtn} onClick={decrement}>
        <Minus size={16} weight='bold' />
      </button>

      <input
        className={styles.numberInput}
        onChange={(e) => setValue(Number(e.target.value))}
        value={value}
        type='number'
        onBlur={(e) => verifyValue(Number(e.target.value))}
      />

      <button className={styles.plusBtn} onClick={increment}>
        <Plus size={16} weight='bold' />
      </button>
    </div>
  );
};

export default Button;
