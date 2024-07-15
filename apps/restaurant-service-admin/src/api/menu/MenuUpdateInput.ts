import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MenuUpdateInput = {
  description?: string | null;
  price?: number | null;
  name?: string | null;
  restaurant?: RestaurantWhereUniqueInput | null;
};
