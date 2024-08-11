import { SortOrder } from "../../util/SortOrder";

export type KafkaMessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  messageContent?: SortOrder;
  topic?: SortOrder;
  updatedAt?: SortOrder;
};
