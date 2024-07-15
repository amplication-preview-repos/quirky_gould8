import { MenuCreateNestedManyWithoutRestaurantsInput } from "./MenuCreateNestedManyWithoutRestaurantsInput";
import { TableCreateNestedManyWithoutRestaurantsInput } from "./TableCreateNestedManyWithoutRestaurantsInput";

export type RestaurantCreateInput = {
  address?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  menus?: MenuCreateNestedManyWithoutRestaurantsInput;
  tablesOnions?: TableCreateNestedManyWithoutRestaurantsInput;
};
