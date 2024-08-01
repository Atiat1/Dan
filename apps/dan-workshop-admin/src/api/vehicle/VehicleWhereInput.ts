import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type VehicleWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  model?: StringNullableFilter;
  plateNumber?: StringNullableFilter;
  year?: IntNullableFilter;
};
