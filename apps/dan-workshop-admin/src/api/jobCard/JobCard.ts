import { Customer } from "../customer/Customer";
import { Invoice } from "../invoice/Invoice";
import { Service } from "../service/Service";

export type JobCard = {
  createdAt: Date;
  customer?: Customer | null;
  description: string | null;
  id: string;
  invoices?: Array<Invoice>;
  jobNumber: number | null;
  services?: Array<Service>;
  status?: "Option1" | null;
  updatedAt: Date;
};
