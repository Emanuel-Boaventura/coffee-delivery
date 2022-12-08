import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import { AddressContext } from '../../providers/AddressContext';
import { CartContext } from '../../providers/CartContext';
import styles from './Header.module.scss';

const Header = () => {
  const { cartItens } = useContext(CartContext);
  const {
    adressInfo: { localidade, uf },
  } = useContext(AddressContext);

  return (
    <header className={styles.header}>
      <NavLink className={styles.imageLink} to='/'>
        <img src={logo} alt='Coffee Delivery logomarca' />
      </NavLink>
      <div className={styles.options}>
        <NavLink
          to='/checkout'
          className={`${styles.mapPinIcon} ${
            localidade && styles.withLocation
          }`}
        >
          <MapPin size={22} weight='fill'></MapPin>
          {localidade && uf && (
            <p>
              {localidade}, {uf}
            </p>
          )}
        </NavLink>
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
