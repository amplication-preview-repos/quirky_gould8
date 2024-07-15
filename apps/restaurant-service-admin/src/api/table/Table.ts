import { Order } from "../order/Order";
import { Restaurant } from "../restaurant/Restaurant";

export type Table = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  tableNumber: number | null;
  seatingCapacity: number | null;
  orders?: Array<Order>;
  restaurant?: Restaurant | null;
};
