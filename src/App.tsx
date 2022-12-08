import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { CartProvider } from './providers/CartContext';
import { AdressProvider } from './providers/AddressContext';
import { PaymentProvider } from './providers/PaymentContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AdressProvider>
          <PaymentProvider>
            <Router />
          </PaymentProvider>
        </AdressProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
