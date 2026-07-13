export class Product {
  id!: string;
  name!: string;
  price!: number;
  description!: string;
}

export class OrderItem {
  productId!: string;
  quantity!: number;
}

export class Order {
  id!: string;
  userId!: string;
  items!: OrderItem[];
  total!: number;
  status!: string;
}

export class CartItem {
  productId!: string;
  quantity!: number;
  name!: string;
  price!: number;
}

export class Cart {
  userId!: string;
  items!: CartItem[];
  totalPrice!: number;
}

export class Payment {
  id!: string;
  orderId!: string;
  amount!: number;
  method!: string;
  status!: string;
}

export class Inventory {
  productId!: string;
  stock!: number;
  location!: string;
}

export class Notification {
  id!: string;
  userId!: string;
  type!: string;
  message!: string;
  status!: string;
}

export class Review {
  id!: string;
  productId!: string;
  userId!: string;
  rating!: number;
  comment!: string;
}

