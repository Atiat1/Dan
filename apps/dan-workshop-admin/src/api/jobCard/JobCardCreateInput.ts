import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InvoiceCreateNestedManyWithoutJobCardsInput } from "./InvoiceCreateNestedManyWithoutJobCardsInput";
import { ServiceCreateNestedManyWithoutJobCardsInput } from "./ServiceCreateNestedManyWithoutJobCardsInput";

export type JobCardCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
  invoices?: InvoiceCreateNestedManyWithoutJobCardsInput;
  jobNumber?: number | null;
  services?: ServiceCreateNestedManyWithoutJobCardsInput;
  status?: "Option1" | null;
};
