import { JobCardWhereUniqueInput } from "../jobCard/JobCardWhereUniqueInput";

export type ServiceUpdateInput = {
  cost?: number | null;
  description?: string | null;
  jobCard?: JobCardWhereUniqueInput | null;
  serviceDate?: Date | null;
};
