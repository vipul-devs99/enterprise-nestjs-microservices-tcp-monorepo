import { Services } from '../constants/microservices.constants';

export const MICROSERVICE_CONFIG = {
  [Services.AUTH]: {
    host: process.env['AUTH_HOST'] || 'localhost',
    port: parseInt(process.env['AUTH_PORT'] || '3001', 10),
  },
  [Services.PRODUCTS]: {
    host: process.env['PRODUCTS_HOST'] || 'localhost',
    port: parseInt(process.env['PRODUCTS_PORT'] || '3002', 10),
  },
  [Services.ORDERS]: {
    host: process.env['ORDERS_HOST'] || 'localhost',
    port: parseInt(process.env['ORDERS_PORT'] || '3003', 10),
  },
  [Services.CART]: {
    host: process.env['CART_HOST'] || 'localhost',
    port: parseInt(process.env['CART_PORT'] || '3004', 10),
  },
  [Services.PAYMENTS]: {
    host: process.env['PAYMENTS_HOST'] || 'localhost',
    port: parseInt(process.env['PAYMENTS_PORT'] || '3005', 10),
  },
  [Services.INVENTORY]: {
    host: process.env['INVENTORY_HOST'] || 'localhost',
    port: parseInt(process.env['INVENTORY_PORT'] || '3006', 10),
  },
  [Services.NOTIFICATIONS]: {
    host: process.env['NOTIFICATIONS_HOST'] || 'localhost',
    port: parseInt(process.env['NOTIFICATIONS_PORT'] || '3007', 10),
  },
  [Services.REVIEWS]: {
    host: process.env['REVIEWS_HOST'] || 'localhost',
    port: parseInt(process.env['REVIEWS_PORT'] || '3008', 10),
  },
};

