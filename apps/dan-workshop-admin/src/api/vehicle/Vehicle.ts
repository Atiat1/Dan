import { Customer } from "../customer/Customer";

export type Vehicle = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  model: string | null;
  plateNumber: string | null;
  updatedAt: Date;
  year: number | null;
};
