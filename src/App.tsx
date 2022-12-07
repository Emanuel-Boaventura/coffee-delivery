import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { CartProvider } from './providers/CartContext';
import { AdressProvider } from './providers/AddressContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AdressProvider>
          <Router />
        </AdressProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
