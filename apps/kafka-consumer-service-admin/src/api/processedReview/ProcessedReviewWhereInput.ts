import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProcessedReviewWhereInput = {
  id?: StringFilter;
  rating?: IntNullableFilter;
  reviewContent?: StringNullableFilter;
};
