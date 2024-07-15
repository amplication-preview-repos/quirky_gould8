import { Customer } from "../customer/Customer";
import { Table } from "../table/Table";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  orderDate: Date | null;
  totalAmount: number | null;
  customer?: Customer | null;
  table?: Table | null;
};
