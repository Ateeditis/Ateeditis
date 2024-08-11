export type ProcessedReview = {
  createdAt: Date;
  id: string;
  rating: number | null;
  reviewContent: string | null;
  updatedAt: Date;
};
