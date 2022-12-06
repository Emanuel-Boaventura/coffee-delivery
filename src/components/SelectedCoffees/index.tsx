import styles from './SelectedCoffees.module.scss';
import { Trash } from 'phosphor-react';
import Button from '../Button';
import { TCoffeeData } from '../../database/coffees';
import { useState } from 'react';

const SelectedCoffess = ({ coffee }: { coffee: TCoffeeData }) => {
  const [actualQuantity, setQuantity] = useState(1);

  return (
    <div key={`coffee-${coffee.id}`} className={styles.coffeeContainer}>
      <img src={coffee.image} />
      <div className={styles.coffeeInfo}>
        <p className={styles.coffeeType}>{coffee.name}</p>
        <div className={styles.buttonsContainer}>
          <Button quantity={actualQuantity} setQuantity={setQuantity} />
          <button className={styles.removeBtn}>
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
