import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ErrorBoundary from './components/ErrorBoundary';
import DebugPanel from './components/DebugPanel';
import Home from './pages/Home';
import Products from './pages/Products';
import CartPage from './pages/Cart';
import Checkout from './pages/Checkout';
import { getProducts, mockLogin, placeOrder } from './utils/api';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('techstore-cart')) || [];
    } catch (error) {
      return [];
    }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [orderMessage, setOrderMessage] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch(() => setError('Could not load products. Please refresh the page.'))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    localStorage.setItem('techstore-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((items) => {
      const itemInCart = items.find((item) => item.id === product.id);
      if (itemInCart) {
        return items.map((item) => (
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      }
      return [...items, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((items) => items.map((item) => (
      item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
    )));
  };

  const removeFromCart = (productId) => {
    setCartItems((items) => items.filter((item) => item.id !== productId));
  };

  const handleLogin = async () => {
    const user = await mockLogin('guest@techstore.com');
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handlePlaceOrder = async (customer) => {
    setError('');
    try {
      const order = await placeOrder({ customer, items: cartItems });
      setCartItems([]);
      setOrderMessage(`Order ${order.id} was placed successfully.`);
    } catch (orderError) {
      setError('Could not place your order. Please try again.');
    }
  };

  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const renderPage = () => {
    switch (currentPage) {
      case 'products':
        return (
          <Products
            products={products}
            onAddToCart={addToCart}
            loading={loading}
            error={error}
          />
        );
      case 'cart':
        return (
          <CartPage
            items={cartItems}
            onQuantityChange={updateQuantity}
            onRemoveItem={removeFromCart}
            onCheckout={() => setCurrentPage('checkout')}
          />
        );
      case 'checkout':
        return (
          <Checkout
            items={cartItems}
            onPlaceOrder={handlePlaceOrder}
            orderMessage={orderMessage}
            error={error}
          />
        );
      default:
        return <Home onBrowseProducts={() => setCurrentPage('products')} />;
    }
  };

  return (
    <div className="min-vh-100">
      <Header
        cartItemCount={cartItemCount}
        onCartClick={() => setCurrentPage('cart')}
        userName={user ? user.name : 'Guest'}
        isLoggedIn={Boolean(user)}
        onLoginClick={user ? handleLogout : handleLogin}
      />
      <Navigation currentPage={currentPage} onNavigate={(page) => {
        setCurrentPage(page);
        setError('');
        setOrderMessage('');
      }} />
      {error && currentPage !== 'products' && currentPage !== 'checkout' && (
        <div className="container mt-3">
          <div className="alert alert-danger" role="alert">{error}</div>
        </div>
      )}
      <ErrorBoundary>
        <main>
          {renderPage()}
        </main>
      </ErrorBoundary>
      <DebugPanel currentPage={currentPage} cartItemCount={cartItemCount} error={error} />
    </div>
  );
};

export default App;
