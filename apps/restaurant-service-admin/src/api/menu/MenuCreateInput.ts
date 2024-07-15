import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MenuCreateInput = {
  description?: string | null;
  price?: number | null;
  name?: string | null;
  restaurant?: RestaurantWhereUniqueInput | null;
};
