import { Route, Routes } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Success from './pages/Success';
import { CartProvider } from './providers/CartContext';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <CartProvider>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/success' element={<Success />} />
        </CartProvider>
      </Route>
    </Routes>
  );
};
export default Router;
