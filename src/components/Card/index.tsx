import styles from './Card.module.scss';
import Button from '../../components/Button';
import { TCoffeeData } from '../../database/coffees';
import { ShoppingCartSimple } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CartContext } from '../../providers/CartContext';

const Card = ({ coffee }: { coffee: TCoffeeData }) => {
  const { addItemCart } = useContext(CartContext);
  const [actualQuantity, setQuantity] = useState(1);

  return (
    <div className={styles.card}>
      <img src={coffee.image} alt={`Foto do Café ${coffee.name}`} />
      <div className={styles.cardText}>
        <div className={styles.coffeTags}>
          {coffee.tags.map((tag, tagIndex) => (
            <span key={`tag-${coffee.id}${tagIndex}`}>{tag}</span>
          ))}
        </div>
        <h3>{coffee.name}</h3>
        <p>{coffee.subtitle}</p>
      </div>
      <div className={styles.cardPrice}>
        <span>
          R$ <strong>{coffee.price}</strong>
        </span>
        <Button quantity={actualQuantity} setQuantity={setQuantity} />
        <button
          onClick={() => {
            addItemCart(coffee, actualQuantity);
          }}
          className={styles.cartIcon}
        >
          <ShoppingCartSimple size={22} weight='fill' />
        </button>
      </div>
    </div>
  );
};

export default Card;
