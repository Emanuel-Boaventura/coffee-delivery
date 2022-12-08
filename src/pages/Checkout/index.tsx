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
import { AddressContext, IAddressInfo } from '../../providers/AddressContext';
import { useNavigate } from 'react-router-dom';
import { PaymentContext } from '../../providers/PaymentContext';

const Checkout = () => {
  const { cartItens } = useContext(CartContext);
  const { adressInfo, saveAdressInfo } = useContext(AddressContext);
  const { paymentMethod, setPaymentMethod } = useContext(PaymentContext);

  const [cepData, setCepData] = useState<IAddressInfo>(adressInfo);
  const [disableBairro, setDisableBairro] = useState(true);
  const [disableLogradouro, setDisableLogradouro] = useState(true);
  const [emptyInfoInputs, setEmptyInfoInputs] = useState(false);

  const [haveAdressInfo, setHaveAdressInfo] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(false);
  const [emptyCart, setEmptyCart] = useState(false);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const deliveryPricePerCoffe = 150; // 150 / 100 = 1.5 que convertem em R$ 1,50

  const buttonsObject = [
    {
      value: 'Cartão de Crédito',
      icon: <CreditCard size={18} weight='bold' />,
    },
    {
      value: 'Cartão de Débito',
      icon: <Bank size={18} weight='bold' />,
    },
    {
      value: 'Dinheiro',
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

  async function getCepData(cepInput: string) {
    try {
      setLoading(true);
      const {
        data: { cep, logradouro, complemento, bairro, localidade, uf },
      } = await axios.get<IAddressInfo>(
        `http://viacep.com.br/ws/${cepInput}/json/`
      );

      logradouro ? setDisableLogradouro(true) : setDisableLogradouro(false);
      bairro ? setDisableBairro(true) : setDisableBairro(false);

      setCepData({
        cep,
        logradouro,
        complemento,
        bairro,
        localidade,
        uf,
        numero: '',
      });
    } catch (error) {
      console.error('erro: ', error);
    } finally {
      setLoading(false);
    }
  }

  function validation() {
    if (
      !cepData.cep ||
      !cepData.bairro ||
      !cepData.uf ||
      !cepData.localidade ||
      !cepData.logradouro ||
      !cepData.numero
    )
      return setEmptyInfoInputs(true);
    setEmptyInfoInputs(false);
    saveAdressInfo(cepData);
  }

  function purchase() {
    let missingData = false;

    adressInfo.cep
      ? setHaveAdressInfo(false)
      : (setHaveAdressInfo(true), (missingData = true));
    cartItens.length > 0
      ? setEmptyCart(false)
      : (setEmptyCart(true), (missingData = true));
    paymentMethod
      ? setSelectedPaymentMethod(false)
      : (setSelectedPaymentMethod(true), (missingData = true));

    !missingData && navigate('/success');
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
          <main
            className={`${styles.deliveryInfo}  ${loading && styles.loading}`}
          >
            <div className={styles.inputContainer}>
              <div className={styles.firstPart}>
                <input
                  onChange={(e) => {
                    const formatedCep = e.target.value
                      .replace(/\D/g, '')
                      .replace(/(\d{5})(\d)/, '$1-$2')
                      .replace(/(-\d{3})\d+?$/, '$1');

                    setCepData({ ...cepData, cep: formatedCep });
                    if (formatedCep.length === 9) getCepData(formatedCep);
                  }}
                  value={cepData.cep}
                  type='text'
                  maxLength={9}
                  placeholder='CEP'
                />
                <span className={`${emptyInfoInputs && styles.emptyInputs}`}>
                  Prencha todos os campos obrigatórios
                </span>
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
                <div className={`${!cepData.complemento && styles.optional}`}>
                  <input
                    value={cepData?.complemento}
                    onChange={(e) =>
                      setCepData({ ...cepData, complemento: e.target.value })
                    }
                    type='text'
                    placeholder='Complemento'
                  />
                </div>
              </div>
              <div className={styles.fourthPart}>
                <input
                  value={cepData?.numero}
                  onChange={(e) =>
                    setCepData({
                      ...cepData,
                      numero: e.target.value,
                    })
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
              <button onClick={() => validation()}>Salvar</button>
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
                  <p>{btn.value}</p>
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
          <div className={styles.groupPurchaseConfirmButton}>
            <button
              onClick={() => purchase()}
              className={styles.purchaseConfirm}
            >
              CONFIRMAR COMPRA
            </button>
            <span className={`${haveAdressInfo && styles.emptyInputs}`}>
              Prencha as Informaçoes de Entrega
            </span>
            <span className={`${selectedPaymentMethod && styles.emptyInputs}`}>
              Selecione um método de Pagameto
            </span>
            <span className={`${emptyCart && styles.emptyInputs}`}>
              Selecione um café para compra
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
