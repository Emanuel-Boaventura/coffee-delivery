import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import { CartContext } from '../../providers/CartContext';
import styles from './Header.module.scss';

const Header = () => {
  const { cartItens } = useContext(CartContext);

  return (
    <header className={styles.header}>
      <NavLink className={styles.imageLink} to='/'>
        <img src={logo} alt='Coffee Delivery logomarca' />
      </NavLink>
      <div className={styles.options}>
        <div className={styles.mapPinIcon}>
          <MapPin size={22} weight='fill'></MapPin>
          <p>Porto Alegre, RS</p>
        </div>
        <NavLink className={styles.cartIcon} to='/checkout'>
          <ShoppingCart size={22} weight='fill' />
          <span
            className={`${styles.cartItens} ${
              cartItens.length > 0 && styles.filled
            }`}
          >
            {cartItens.length}
          </span>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
