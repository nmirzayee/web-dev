export interface OrderItemPayload {
  product: number;
  quantity: number;
}

export interface Order {
  id: number;
  status: string;
  total_price: number;
  created_at: string;
}