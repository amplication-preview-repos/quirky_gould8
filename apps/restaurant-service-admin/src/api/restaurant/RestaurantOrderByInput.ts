import { SortOrder } from "../../util/SortOrder";

export type RestaurantOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  address?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
};
