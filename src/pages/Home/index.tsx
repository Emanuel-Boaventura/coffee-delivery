import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

import styles from './Home.module.scss';
import home from '../../assets/Home.png';
import { coffees } from '../../database/coffees';
import Card from '../../components/Card';

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className={styles.subtitle}>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className={styles.features}>
            <span>
              <span className={`${styles.iconContainer} ${styles.iconCart}`}>
                <ShoppingCart size={16} weight='fill' />
              </span>
              <p>Compra simples e segura</p>
            </span>
            <span>
              <span className={`${styles.iconContainer} ${styles.iconPackage}`}>
                <Package size={16} weight='fill' />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </span>
            <span>
              <span className={`${styles.iconContainer} ${styles.iconTimer}`}>
                <Timer size={16} weight='fill' />
              </span>
              <p>Entrega rápida e rastreada</p>
            </span>
            <span>
              <span className={`${styles.iconContainer} ${styles.iconCoffee}`}>
                <Coffee size={16} weight='fill' />
              </span>
              <p>O café chega fresquinho até você</p>
            </span>
          </div>
        </div>
        <img className={styles.headerImage} src={home} alt='' />
      </section>
      <section className={styles.main}>
        <h2 className={styles.sectionTitle}>Nossos cafés</h2>
        <article className={styles.coffeesContainer}>
          {coffees.map((coffee) => (
            <Card coffee={coffee} key={coffee.id} />
          ))}
        </article>
      </section>
    </div>
  );
};

export default Home;
