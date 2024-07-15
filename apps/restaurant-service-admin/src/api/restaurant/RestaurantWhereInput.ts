import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MenuListRelationFilter } from "../menu/MenuListRelationFilter";
import { TableListRelationFilter } from "../table/TableListRelationFilter";

export type RestaurantWhereInput = {
  id?: StringFilter;
  address?: StringNullableFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  menus?: MenuListRelationFilter;
  tablesOnions?: TableListRelationFilter;
};
