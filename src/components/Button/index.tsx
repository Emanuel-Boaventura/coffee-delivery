import { Minus, Plus } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../providers/CartContext';
import styles from './Button.module.scss';

interface IButtonProps {
  quantity: number;
  itemId?: number;
  setQuantity?: React.Dispatch<React.SetStateAction<number>>;
}

const Button = ({ quantity, itemId, setQuantity }: IButtonProps) => {
  const { changeQuantityCartItem } = useContext(CartContext);

  function increment() {
    if (quantity < 20) {
      setQuantity && setQuantity((state) => state + 1);
      itemId && changeQuantityCartItem(itemId, quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity && setQuantity((state) => state - 1);
      itemId && changeQuantityCartItem(itemId, quantity - 1);
    }
  }

  function onChange(value: number) {
    if (itemId) {
      if (value > 20) return changeQuantityCartItem(itemId, 20);
      if (value < 0) return changeQuantityCartItem(itemId, 20);
      changeQuantityCartItem(itemId, value);
    }
    if (setQuantity) {
      if (value > 20) return setQuantity(20);
      if (value < 0) return setQuantity(0);
      setQuantity(value);
    }
  }

  return (
    <div className={styles.groupBtn}>
      <button className={styles.minusBtn} onClick={decrement}>
        <Minus size={16} weight='bold' />
      </button>

      <input
        className={styles.numberInput}
        onChange={(e) => onChange(Number(e.target.value))}
        value={quantity.toString()}
        type='number'
        onBlur={(e) => {
          // se colocar 0 no input e sair agora fica 1, impedindo do valor ser 0
          if (e.target.value === '0') {
            setQuantity && setQuantity(1);
            itemId && changeQuantityCartItem(itemId, 1);
          }
        }}
      />

      <button className={styles.plusBtn} onClick={increment}>
        <Plus size={16} weight='bold' />
      </button>
    </div>
  );
};

export default Button;
