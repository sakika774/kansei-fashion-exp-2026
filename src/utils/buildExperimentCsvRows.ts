import { experimentConfig } from "../config/experimentConfig";
import type { ExperimentResult } from "../types/experimentResult";

export const buildExperimentCsvRows = (
  result: ExperimentResult
): string[][] => {
  const header = [
    "participantId",
    "stimulusId",
    ...experimentConfig.ratingScale.items.map((item) => item.id),
  ];

  const rows = result.results.map((r) => [
    result.participantId,
    r.stimulusId,
    ...experimentConfig.ratingScale.items.map(
      (item) => String(r.ratings[item.id])
    ),
  ]);

  return [header, ...rows];
};