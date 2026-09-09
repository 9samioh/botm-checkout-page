// defining all types used for the Checkout Page

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImg: string;
  price: number;
}

export interface Address {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: number;
}

export interface OrderConfirmation {
  orderID: string;
  shipDate: string;
}

export interface OrderError {
  error: string;
}
