import { SortOrder } from "../../util/SortOrder";

export type JobCardOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  jobNumber?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
