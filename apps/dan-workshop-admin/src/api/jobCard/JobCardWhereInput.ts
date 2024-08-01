import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ServiceListRelationFilter } from "../service/ServiceListRelationFilter";

export type JobCardWhereInput = {
  customer?: CustomerWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  jobNumber?: IntNullableFilter;
  services?: ServiceListRelationFilter;
  status?: "Option1";
};
