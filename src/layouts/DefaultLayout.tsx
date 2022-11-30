import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import styles from './DefaultLayout.module.scss';

const DefaultLayout = () => {
  return (
    <div className={styles.contentContainer}>
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
