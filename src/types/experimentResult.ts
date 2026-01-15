export type ExperimentResult = {
  participantId: string;
  finishedAt: string; // ISO string
  results: {
    stimulusId: string;
    ratings: Record<string, number>;
  }[];
};