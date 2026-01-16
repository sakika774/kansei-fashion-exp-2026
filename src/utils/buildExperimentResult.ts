import { ExperimentResult } from "../types/experimentResult";

type StimulusRatings = {
  stimulusId: string;
  ratings: Record<string, number | null>;
};

export const buildExperimentResult = (
  participantId: string,
  results: StimulusRatings[]
): ExperimentResult => {
  return {
    participantId,
    finishedAt: new Date().toISOString(),
    results: results.map((res) => ({
      stimulusId: res.stimulusId,
      ratings: Object.fromEntries(
        Object.entries(res.ratings).map(([key, value]) => [
          key,
          value ?? 0,
        ])
      ),
    })),
  };
};