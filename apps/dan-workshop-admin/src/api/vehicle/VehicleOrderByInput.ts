import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  model?: SortOrder;
  plateNumber?: SortOrder;
  updatedAt?: SortOrder;
  year?: SortOrder;
};
