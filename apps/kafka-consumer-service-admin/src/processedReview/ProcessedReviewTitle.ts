import { ProcessedReview as TProcessedReview } from "../api/processedReview/ProcessedReview";

export const PROCESSEDREVIEW_TITLE_FIELD = "id";

export const ProcessedReviewTitle = (record: TProcessedReview): string => {
  return record.id?.toString() || String(record.id);
};
