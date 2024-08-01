import { JobCard } from "../jobCard/JobCard";

export type Service = {
  cost: number | null;
  createdAt: Date;
  description: string | null;
  id: string;
  jobCard?: JobCard | null;
  serviceDate: Date | null;
  updatedAt: Date;
};
