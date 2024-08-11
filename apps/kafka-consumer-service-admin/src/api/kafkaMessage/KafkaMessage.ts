export type KafkaMessage = {
  createdAt: Date;
  id: string;
  messageContent: string | null;
  topic: string | null;
  updatedAt: Date;
};
