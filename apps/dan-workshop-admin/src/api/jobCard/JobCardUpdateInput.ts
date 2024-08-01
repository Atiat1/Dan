import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InvoiceUpdateManyWithoutJobCardsInput } from "./InvoiceUpdateManyWithoutJobCardsInput";
import { ServiceUpdateManyWithoutJobCardsInput } from "./ServiceUpdateManyWithoutJobCardsInput";

export type JobCardUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
  invoices?: InvoiceUpdateManyWithoutJobCardsInput;
  jobNumber?: number | null;
  services?: ServiceUpdateManyWithoutJobCardsInput;
  status?: "Option1" | null;
};
