import SelectedCoffess from '../../components/SelectedCoffees';
import styles from './Checkout.module.scss';

const Checkout = () => {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.sectionInfo}>
        <h3>Complete seu pedido</h3>
        <div></div>
      </section>
      <section className={styles.sectionPurchase}>
        <h3>Cafés selecionados</h3>
        <div className={styles.purchaseContainer}>
          <SelectedCoffess />
        </div>
        <div className={styles.priceInfo}>
          <div className={styles.priceProducts}>
            <p>Preço dos Produtos</p>
            <span>
              R$ <strong>33,20</strong>
            </span>
          </div>
          <div className={styles.priceDelivery}>
            <p>Entrega</p>
            <span>
              R$ <strong>33,20</strong>
            </span>
          </div>
          <div className={styles.priceTotal}>
            <p>Total</p>
            <span>
              R$ <strong>33,20</strong>
            </span>
          </div>
        </div>
        <button className={styles.purchaseConfirm}>CONFIRMAR COMPRA</button>
      </section>
    </div>
  );
};

export default Checkout;
