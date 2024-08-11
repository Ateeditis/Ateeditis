import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type KafkaMessageWhereInput = {
  id?: StringFilter;
  messageContent?: StringNullableFilter;
  topic?: StringNullableFilter;
};
