import { OrderUpdateManyWithoutTablesInput } from "./OrderUpdateManyWithoutTablesInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type TableUpdateInput = {
  tableNumber?: number | null;
  seatingCapacity?: number | null;
  orders?: OrderUpdateManyWithoutTablesInput;
  restaurant?: RestaurantWhereUniqueInput | null;
};
