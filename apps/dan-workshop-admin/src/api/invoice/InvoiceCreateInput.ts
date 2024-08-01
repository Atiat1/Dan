import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { JobCardWhereUniqueInput } from "../jobCard/JobCardWhereUniqueInput";

export type InvoiceCreateInput = {
  amount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  invoiceNumber?: number | null;
  jobCard?: JobCardWhereUniqueInput | null;
};
