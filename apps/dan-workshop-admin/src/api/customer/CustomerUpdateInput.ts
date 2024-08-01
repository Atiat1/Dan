import { InvoiceUpdateManyWithoutCustomersInput } from "./InvoiceUpdateManyWithoutCustomersInput";
import { JobCardUpdateManyWithoutCustomersInput } from "./JobCardUpdateManyWithoutCustomersInput";
import { VehicleUpdateManyWithoutCustomersInput } from "./VehicleUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  email?: string | null;
  invoices?: InvoiceUpdateManyWithoutCustomersInput;
  jobCards?: JobCardUpdateManyWithoutCustomersInput;
  name?: string | null;
  phone?: string | null;
  vehicles?: VehicleUpdateManyWithoutCustomersInput;
};
