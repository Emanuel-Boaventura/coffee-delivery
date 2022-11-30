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
        <div>
          <SelectedCoffess />
        </div>
      </section>
    </div>
  );
};

export default Checkout;
