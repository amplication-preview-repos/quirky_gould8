import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MenuWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  price?: FloatNullableFilter;
  name?: StringNullableFilter;
  restaurant?: RestaurantWhereUniqueInput;
};
