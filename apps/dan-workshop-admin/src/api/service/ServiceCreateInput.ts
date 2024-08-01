import { JobCardWhereUniqueInput } from "../jobCard/JobCardWhereUniqueInput";

export type ServiceCreateInput = {
  cost?: number | null;
  description?: string | null;
  jobCard?: JobCardWhereUniqueInput | null;
  serviceDate?: Date | null;
};
