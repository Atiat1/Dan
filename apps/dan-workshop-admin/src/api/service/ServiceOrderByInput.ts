import { SortOrder } from "../../util/SortOrder";

export type ServiceOrderByInput = {
  cost?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  jobCardId?: SortOrder;
  serviceDate?: SortOrder;
  updatedAt?: SortOrder;
};
