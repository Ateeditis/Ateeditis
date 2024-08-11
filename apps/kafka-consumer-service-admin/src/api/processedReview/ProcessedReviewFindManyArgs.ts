import { ProcessedReviewWhereInput } from "./ProcessedReviewWhereInput";
import { ProcessedReviewOrderByInput } from "./ProcessedReviewOrderByInput";

export type ProcessedReviewFindManyArgs = {
  where?: ProcessedReviewWhereInput;
  orderBy?: Array<ProcessedReviewOrderByInput>;
  skip?: number;
  take?: number;
};
