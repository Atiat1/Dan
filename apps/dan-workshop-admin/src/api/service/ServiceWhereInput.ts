import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobCardWhereUniqueInput } from "../jobCard/JobCardWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ServiceWhereInput = {
  cost?: FloatNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  jobCard?: JobCardWhereUniqueInput;
  serviceDate?: DateTimeNullableFilter;
};
