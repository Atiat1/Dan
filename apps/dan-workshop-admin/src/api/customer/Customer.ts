import { Invoice } from "../invoice/Invoice";
import { JobCard } from "../jobCard/JobCard";
import { Vehicle } from "../vehicle/Vehicle";

export type Customer = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  invoices?: Array<Invoice>;
  jobCards?: Array<JobCard>;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
  vehicles?: Array<Vehicle>;
};
