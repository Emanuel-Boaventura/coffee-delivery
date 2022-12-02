import {
  Coffee,
  Package,
  ShoppingCart,
  ShoppingCartSimple,
  Timer,
} from 'phosphor-react';

import styles from './Home.module.scss';
import home from '../../assets/Home.png';
import { coffees } from '../../database/coffees';

import Button from '../../components/Button';

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
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
      </header>
      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Nossos cafés</h2>
        <div className={styles.coffeesContainer}>
          {coffees.map((coffee, coffeeIndex) => {
            return (
              <div key={`coffee-${coffeeIndex}`} className={styles.card}>
                <img src={coffee.image} alt={`Foto do Café ${coffee.name}`} />
                <div className={styles.cardText}>
                  <div className={styles.coffeTags}>
                    {coffee.tags.map((tag, tagIndex) => (
                      <span key={`tag-${coffeeIndex}${tagIndex}`}>{tag}</span>
                    ))}
                  </div>
                  <h3>{coffee.name}</h3>
                  <p>{coffee.subtitle}</p>
                </div>
                <div className={styles.cardPrice}>
                  <span>
                    R$ <strong>{coffee.price}</strong>
                  </span>
                  <Button />
                  <button className={styles.cartIcon}>
                    <ShoppingCartSimple size={22} weight='fill' />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;
