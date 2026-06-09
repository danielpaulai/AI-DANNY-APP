export type BrainChunk = {
  id: string;
  title: string;
  source: string;
  text: string;
  tags: string[];
};

export type BrainSearchResult = {
  id: string;
  title: string;
  source: string;
  excerpt: string;
  score: number;
};
