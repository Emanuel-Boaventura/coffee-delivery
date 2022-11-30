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
              <p className={styles.coffeeType}> Expresso Tradicional</p>
              <div className={styles.buttonsContainer}>
                <Button />
                <button className={styles.removeBtn}>
                  <Trash size={16} weight='bold' />
                  <p>REMOVER</p>
                </button>
              </div>
            </div>
            <span>R$ 9,90</span>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedCoffess;
