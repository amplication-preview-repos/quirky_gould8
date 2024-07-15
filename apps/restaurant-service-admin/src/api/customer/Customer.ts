import { Order } from "../order/Order";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  orders?: Array<Order>;
};
