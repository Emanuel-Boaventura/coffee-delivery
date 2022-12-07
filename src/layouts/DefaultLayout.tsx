import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import styles from './DefaultLayout.module.scss';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <Outlet />
      </main>
    </>
  );
};

export default DefaultLayout;
