import { SortOrder } from "../../util/SortOrder";

export type ProcessedReviewOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  reviewContent?: SortOrder;
  updatedAt?: SortOrder;
};
