import { Minus, Plus } from 'phosphor-react';
import styles from './Button.module.scss';

interface IButtonProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const Button = ({ quantity, setQuantity }: IButtonProps) => {
  function increment() {
    if (quantity < 20) setQuantity((state) => state + 1);
  }

  function decrement() {
    if (quantity > 1) setQuantity((state) => state - 1);
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
        value={quantity.toString()}
        type='number'
        onBlur={(e) => e.target.value === '0' && setQuantity(1)} // se colocar 0 no input e sair agora fica 1, impedindo do valor ser 0
      />

      <button className={styles.plusBtn} onClick={increment}>
        <Plus size={16} weight='bold' />
      </button>
    </div>
  );
};

export default Button;
