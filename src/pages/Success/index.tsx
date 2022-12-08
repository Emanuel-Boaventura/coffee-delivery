import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useContext } from 'react';

import illustration from '../../assets/Illustration.png';
import { AddressContext } from '../../providers/AddressContext';
import { PaymentContext } from '../../providers/PaymentContext';
import styles from './Success.module.scss';

const Success = () => {
  const {
    adressInfo: { localidade, logradouro, numero, bairro, uf },
  } = useContext(AddressContext);
  const { paymentMethod } = useContext(PaymentContext);

  const deliveryInfo = [
    {
      infoTextLine1: `Entrega em ${bairro} - ${localidade},  ${uf}`,
      infoTextLine2: `${logradouro}, ${numero}`,
      iconClass: styles.iconMapPin,
      icon: <MapPin size={16} weight='fill' />,
    },
    {
      infoTextLine1: `Previsão de entrega`,
      infoTextLine2: `30 min - 40 min`,
      iconClass: styles.iconTimer,
      icon: <Timer size={16} weight='fill' />,
    },
    {
      infoTextLine1: `Pagamento na entrega`,
      infoTextLine2: `${paymentMethod}`,
      iconClass: styles.iconMoney,
      icon: <CurrencyDollar size={16} weight='fill' />,
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h2 className={styles.title}>Uhu! Pedido confirmado</h2>
          <p className={styles.subtitle}>
            Agora é só aguardar que logo o café chegará até você
          </p>
        </header>
        <main>
          <div className={styles.mainContentWrapper}>
            <div className={styles.mainContent}>
              {deliveryInfo.map((data, index) => {
                return (
                  <div
                    key={`deliveryInfo-${index}`}
                    className={styles.deliveryInfo}
                  >
                    <span
                      className={`${styles.iconContainer} ${data.iconClass}`}
                    >
                      {data.icon}
                    </span>
                    <div className={styles.deliveryInfoText}>
                      <p className={styles.deliveryStreet}>
                        {data.infoTextLine1}
                      </p>
                      <p className={styles.deliveryCity}>
                        <strong>{data.infoTextLine2}</strong>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <img
            className={styles.mainImage}
            src={illustration}
            alt='Ilustração de um Motoboy'
          />
        </main>
      </div>
    </div>
  );
};

export default Success;
