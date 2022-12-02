import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import styles from './Header.module.scss';

const Header = () => {
  const cartFilled = true;
  const cartItensLenght = 4;

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
            className={`${styles.cartItens} ${cartFilled && styles.filled}`}
          >
            {cartItensLenght}
          </span>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
