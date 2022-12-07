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
import axios from 'axios';

interface ICEP {
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  numero?: string;
}

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cepData, setCepData] = useState<ICEP>({} as ICEP);
  const [disableBairro, setDisableBairro] = useState(true);
  const [disableLogradouro, setDisableLogradouro] = useState(true);

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

  async function getCepData(cep: string) {
    try {
      // setLoading(true);
      const { data } = await axios.get(`http://viacep.com.br/ws/${cep}/json/`);
      const { logradouro, complemento, bairro, localidade, uf } = data;

      logradouro ? setDisableLogradouro(true) : setDisableLogradouro(false);
      bairro ? setDisableBairro(true) : setDisableBairro(false);

      setCepData({ logradouro, complemento, bairro, localidade, uf });
    } catch (error) {
      console.error('erro: ', error);
    } finally {
      // setLoading(false);
    }
  }

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
              <input
                onChange={(e) => {
                  if (e.target.value.length === 8) getCepData(e.target.value);
                }}
                type='text'
                maxLength={8}
                placeholder='CEP'
              />
            </div>
            <div className={styles.secondPart}>
              <input
                value={cepData?.logradouro}
                onChange={(e) =>
                  setCepData({ ...cepData, logradouro: e.target.value })
                }
                type='text'
                placeholder='Rua'
                disabled={disableLogradouro}
              />
            </div>
            <div className={styles.thirdPart}>
              <input
                value={cepData?.bairro}
                onChange={(e) =>
                  setCepData({ ...cepData, bairro: e.target.value })
                }
                type='text'
                placeholder='Bairro'
                disabled={disableBairro}
              />
              <input
                value={cepData?.complemento}
                onChange={(e) =>
                  setCepData({ ...cepData, complemento: e.target.value })
                }
                type='text'
                placeholder='Complemento'
              />
            </div>
            <div className={styles.fourthPart}>
              <input
                value={cepData?.numero}
                onChange={(e) =>
                  setCepData({ ...cepData, numero: e.target.value })
                }
                type='number'
                placeholder='Número'
              />

              <input
                value={cepData?.localidade}
                type='text'
                placeholder='Cidade'
                disabled
              />
              <input
                value={cepData?.uf}
                type='text'
                placeholder='UF'
                disabled
              />
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
          <button className={styles.purchaseConfirm}>CONFIRMAR COMPRA</button>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
