import { JobCard as TJobCard } from "../api/jobCard/JobCard";

export const JOBCARD_TITLE_FIELD = "id";

export const JobCardTitle = (record: TJobCard): string => {
  return record.id?.toString() || String(record.id);
};
