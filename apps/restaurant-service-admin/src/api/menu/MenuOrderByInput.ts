import { SortOrder } from "../../util/SortOrder";

export type MenuOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  price?: SortOrder;
  name?: SortOrder;
  restaurantId?: SortOrder;
};
