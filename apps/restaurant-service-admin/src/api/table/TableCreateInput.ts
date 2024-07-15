import { OrderCreateNestedManyWithoutTablesInput } from "./OrderCreateNestedManyWithoutTablesInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type TableCreateInput = {
  tableNumber?: number | null;
  seatingCapacity?: number | null;
  orders?: OrderCreateNestedManyWithoutTablesInput;
  restaurant?: RestaurantWhereUniqueInput | null;
};
