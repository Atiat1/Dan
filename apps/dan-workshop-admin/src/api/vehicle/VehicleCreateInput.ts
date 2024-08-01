import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type VehicleCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  model?: string | null;
  plateNumber?: string | null;
  year?: number | null;
};
