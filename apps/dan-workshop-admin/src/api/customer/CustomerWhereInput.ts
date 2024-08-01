import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { JobCardListRelationFilter } from "../jobCard/JobCardListRelationFilter";
import { VehicleListRelationFilter } from "../vehicle/VehicleListRelationFilter";

export type CustomerWhereInput = {
  address?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  jobCards?: JobCardListRelationFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  vehicles?: VehicleListRelationFilter;
};
