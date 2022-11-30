import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import styles from './Header.module.scss';

const Header = () => {
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
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
