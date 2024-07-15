import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type OrderCreateInput = {
  orderDate?: Date | null;
  totalAmount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  table?: TableWhereUniqueInput | null;
};
