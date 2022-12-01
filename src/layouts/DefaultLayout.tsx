import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import styles from './DefaultLayout.module.scss';

const DefaultLayout = () => {
  return (
    <div className={styles.wrapperContentContainer}>
      <div className={styles.contentContainer}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
