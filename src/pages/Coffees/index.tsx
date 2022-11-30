import styles from './Coffees.module.scss';
import { useState, useRef } from 'react';
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';

import coffeExpresso from '../../assets/Type=Expresso.png';

const Coffes = () => {
  const [value, setValue] = useState(0);

  function verifyValue(value: number) {
    if (value > 20) setValue(20);
    if (value < 0) setValue(0);
  }

  function decrement() {
    if (value > 20) {
      setValue(20);
      return;
    } else if (value <= 0) {
      setValue(0);
      return;
    } else {
      setValue(value - 1);
    }
  }

  function increment() {
    if (value >= 20) {
      setValue(20);
      return;
    } else if (value < 0) {
      setValue(0);
      return;
    } else {
      setValue(value + 1);
    }
  }

  return (
    <div className={styles.card}>
      <img src={coffeExpresso} alt='Café Expresso Tradicional' />
      <div className={styles.cardText}>
        <span>TRADICIONAL</span>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </div>
      <div className={styles.cardPrice}>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <div className={styles.groupBtn}>
          <button className={styles.minusBtn} onClick={decrement}>
            <Minus size={16} weight='bold' />
          </button>

          <input
            className={styles.numberInput}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            type='number'
            min={0}
            max={3}
            onBlur={(e) => verifyValue(Number(e.target.value))}
          />

          <button className={styles.plusBtn} onClick={increment}>
            <Plus size={16} weight='bold' />
          </button>
        </div>
        <div className={styles.cartIcon}>
          <ShoppingCartSimple size={22} weight='fill' />
        </div>
      </div>
    </div>
  );
};

export default Coffes;
