export type MessageUnsaved = {
  actor_id: string;
  message: string;
  thread_id: string;
};

export type Message = MessageUnsaved & {
  id: string;
  timestamp: string;
  actor_type: string;
  message_type: string;
};
