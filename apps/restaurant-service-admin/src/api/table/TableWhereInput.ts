import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type TableWhereInput = {
  id?: StringFilter;
  tableNumber?: IntNullableFilter;
  seatingCapacity?: IntNullableFilter;
  orders?: OrderListRelationFilter;
  restaurant?: RestaurantWhereUniqueInput;
};
