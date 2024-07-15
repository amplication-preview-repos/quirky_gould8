import { SortOrder } from "../../util/SortOrder";

export type TableOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  tableNumber?: SortOrder;
  seatingCapacity?: SortOrder;
  restaurantId?: SortOrder;
};
