export type ClientWorkspace = {
  id: string;
  name: string;
  accessCode: string;
  founderName: string;
  business: string;
  icp: string;
  positioning: string;
  voiceNotes: string;
  stage: string;
  createdAt: string;
};

export type SessionMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  skillId?: string;
  citations?: string[];
  createdAt: string;
};

export type FeedbackEntry = {
  workspaceId: string;
  messageId: string;
  rating: "helpful" | "used" | "weak";
  note?: string;
  createdAt: string;
};
