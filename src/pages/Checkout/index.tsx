import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { useContext, useState } from 'react';
import SelectedCoffess from '../../components/SelectedCoffees';
import styles from './Checkout.module.scss';
import { CartContext } from '../../providers/CartContext';
import currencyMask from '../../utils/currencyMask';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const deliveryPricePerCoffe = 150; // 150 / 100 = 1.5 que convertem em R$ 1,50

  const { cartItens } = useContext(CartContext);

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

  const productsPrice = cartItens.reduce(
    (accumulator, coffee) =>
      accumulator + Number(coffee.price.replace(/\D/g, '')) * coffee.quantity,
    0
  );

  let deliveryPrice = cartItens.reduce(
    (accumulator, coffee) =>
      accumulator + deliveryPricePerCoffe * coffee.quantity,
    0
  );

  let totalOrderPrice = productsPrice + deliveryPrice;

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
          {cartItens.map((coffee) => (
            <SelectedCoffess coffee={coffee} key={coffee.id} />
          ))}
          <div className={styles.priceInfo}>
            <div className={styles.priceProducts}>
              <p>Preço dos Produtos</p>
              <span>
                R$ <strong>{currencyMask(productsPrice)}</strong>
              </span>
            </div>
            <div className={styles.priceDelivery}>
              <p>Entrega</p>
              <span>
                R$ <strong>{currencyMask(deliveryPrice)}</strong>
              </span>
            </div>
            <div className={styles.priceTotal}>
              <p>Total</p>
              <span>
                R$ <strong>{currencyMask(totalOrderPrice)}</strong>
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              console.log('teste');
            }}
            className={styles.purchaseConfirm}
          >
            CONFIRMAR COMPRA
          </button>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
