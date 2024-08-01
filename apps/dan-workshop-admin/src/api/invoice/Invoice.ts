import { Customer } from "../customer/Customer";
import { JobCard } from "../jobCard/JobCard";

export type Invoice = {
  amount: number | null;
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  id: string;
  invoiceNumber: number | null;
  jobCard?: JobCard | null;
  updatedAt: Date;
};
