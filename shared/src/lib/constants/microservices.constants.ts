export enum Services {
  AUTH = 'AUTH_SERVICE',
  PRODUCTS = 'PRODUCTS_SERVICE',
  ORDERS = 'ORDERS_SERVICE',
  CART = 'CART_SERVICE',
  PAYMENTS = 'PAYMENTS_SERVICE',
  INVENTORY = 'INVENTORY_SERVICE',
}

export enum MessagePatterns {
  // Auth
  GET_USER = 'get_user',
  CREATE_USER = 'create_user',

  // Products
  GET_PRODUCTS = 'get_products',

  // Orders
  GET_ORDERS = 'get_orders',

  // Cart
  GET_CART = 'get_cart',

  // Payments
  GET_PAYMENTS = 'get_payments',

  // Inventory
  GET_INVENTORY = 'get_inventory',
}
