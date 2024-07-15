import { Menu } from "../menu/Menu";
import { Table } from "../table/Table";

export type Restaurant = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address: string | null;
  name: string | null;
  phoneNumber: string | null;
  menus?: Array<Menu>;
  tablesOnions?: Array<Table>;
};
