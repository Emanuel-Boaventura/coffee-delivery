import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { useState } from 'react';
import SelectedCoffess from '../../components/SelectedCoffees';
import styles from './Checkout.module.scss';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const buttonsObject = [
    {
      name: 'CARTÃO DE CRÉDITO',
      value: 'credit',
      icon: <CreditCard size={18} weight='bold' />,
    },
    {
      name: 'CARTÃO DE DÉBITO',
      value: 'debit',
      icon: <Bank size={18} weight='bold' />,
    },
    {
      name: 'DINHEIRO',
      value: 'money',
      icon: <Money size={18} weight='bold' />,
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.infoContainer}>
        <h2>Complete seu pedido</h2>
        <section className={styles.sectionInfo}>
          <header className={styles.sectionHeader}>
            <MapPinLine size={38} />
            <div className={styles.sectionTitle}>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>
          <main className={styles.inputContainer}>
            <div className={styles.firstPart}>
              <input type='text' placeholder='CEP' />
            </div>
            <div className={styles.secondPart}>
              <input type='text' placeholder='Rua' />
            </div>
            <div className={styles.thirdPart}>
              <input type='number' placeholder='Número' />
              <input type='text' placeholder='Complemento' />
            </div>
            <div className={styles.fourthPart}>
              <input type='text' placeholder='Bairro' />
              <select>
                <option value=''>Select your option</option>
                <option value='hurr'>Durr</option>
              </select>
              <select>
                <option value=''>UF</option>
                <option value='hurr'>Durr</option>
              </select>
            </div>
          </main>
        </section>
        <section className={styles.sectionCard}>
          <header className={styles.sectionHeader}>
            <CurrencyDollar size={38} />
            <div className={styles.sectionTitle}>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>
          <main className={styles.paymentContainer}>
            {buttonsObject.map((btn, index) => {
              return (
                <button
                  key={`paymentButton-${index}`}
                  onClick={() => setPaymentMethod(btn.value)}
                  className={`${styles.paymentBtn} ${
                    paymentMethod === btn.value && styles.paymentChosen
                  }`}
                >
                  <span className={styles.iconBtn}>{btn.icon}</span>
                  <p>{btn.name}</p>
                </button>
              );
            })}
          </main>
        </section>
      </div>
      <section className={styles.sectionPurchase}>
        <h2>Cafés selecionados</h2>
        <div className={styles.purchaseContainer}>
          <SelectedCoffess />
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
        </div>
      </section>
    </div>
  );
};

export default Checkout;