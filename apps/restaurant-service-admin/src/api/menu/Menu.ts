import { Restaurant } from "../restaurant/Restaurant";

export type Menu = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  price: number | null;
  name: string | null;
  restaurant?: Restaurant | null;
};
