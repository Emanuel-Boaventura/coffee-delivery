import { Timer } from 'phosphor-react';

import styles from './Success.module.scss';

const Success = () => {
  const coffees = [1, 2, 3, 5, 6];
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h2 className={styles.title}>Uhu! Pedido confirmado</h2>
        <p className={styles.subtitle}>
          Agora é só aguardar que logo o café chegará até você
        </p>
      </header>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <div>
            <span className={`${styles.iconContainer} ${styles.iconTimer}`}>
              <Timer size={16} weight='fill' />
            </span>
            <p>Compra simples e segura</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Success;
