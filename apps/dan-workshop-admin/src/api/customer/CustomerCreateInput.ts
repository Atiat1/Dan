import { InvoiceCreateNestedManyWithoutCustomersInput } from "./InvoiceCreateNestedManyWithoutCustomersInput";
import { JobCardCreateNestedManyWithoutCustomersInput } from "./JobCardCreateNestedManyWithoutCustomersInput";
import { VehicleCreateNestedManyWithoutCustomersInput } from "./VehicleCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  email?: string | null;
  invoices?: InvoiceCreateNestedManyWithoutCustomersInput;
  jobCards?: JobCardCreateNestedManyWithoutCustomersInput;
  name?: string | null;
  phone?: string | null;
  vehicles?: VehicleCreateNestedManyWithoutCustomersInput;
};
