import { PRODUCTS } from './mockData';
import { generateOrderId } from './helpers';

// These functions imitate a small API without needing a server.
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(PRODUCTS), 300);
  });
};

export const mockLogin = (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: email ? email.split('@')[0] : 'Guest',
        email: email || 'guest@techstore.com'
      });
    }, 300);
  });
};

export const placeOrder = (orderDetails) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...orderDetails,
        id: generateOrderId(),
        createdAt: new Date().toISOString()
      });
    }, 300);
  });
};
