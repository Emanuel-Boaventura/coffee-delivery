import styles from './SelectedCoffees.module.scss';
import coffeExpresso from '../../assets/Type=Expresso.png';
import { Trash } from 'phosphor-react';
import Button from '../Button';

const SelectedCoffess = () => {
  const coffees = [1, 2, 3];

  return (
    <div>
      {coffees.map(() => {
        return (
          <div className={styles.coffeeContainer}>
            <img src={coffeExpresso} />
            <div className={styles.coffeeInfo}>
              <Button />
              <button className={styles.removeBtn}>
                <Trash size={16} />
                <p>REMOVER</p>
              </button>
            </div>
            <span>R$ 9,90</span>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedCoffess;
