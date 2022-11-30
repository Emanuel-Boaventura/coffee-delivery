import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';
import styles from './Button.module.scss';

const Button = () => {
  const [value, setValue] = useState(0);

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
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        type='number'
        min={1}
        onBlur={(e) => verifyValue(Number(e.target.value))}
      />

      <button className={styles.plusBtn} onClick={increment}>
        <Plus size={16} weight='bold' />
      </button>
    </div>
  );
};

export default Button;
