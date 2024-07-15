import { MenuUpdateManyWithoutRestaurantsInput } from "./MenuUpdateManyWithoutRestaurantsInput";
import { TableUpdateManyWithoutRestaurantsInput } from "./TableUpdateManyWithoutRestaurantsInput";

export type RestaurantUpdateInput = {
  address?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  menus?: MenuUpdateManyWithoutRestaurantsInput;
  tablesOnions?: TableUpdateManyWithoutRestaurantsInput;
};
