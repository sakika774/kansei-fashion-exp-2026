import { useState } from "react";
import { experimentConfig } from "../config/experimentConfig";

type RatingValue = number | null;

type StimulusRatings = {
  stimulusId: string;
  ratings: Record<string, RatingValue>;
};

export const useExperimentState = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [results, setResults] = useState<StimulusRatings[]>(
    experimentConfig.stimuli.map((stimulus) => ({
      stimulusId: stimulus.id,
      ratings: Object.fromEntries(
        experimentConfig.ratingScale.items.map((item) => [item.id, null])
      ),
    }))
  );

  const currentStimulus = experimentConfig.stimuli[currentIndex];
  const currentResult = results[currentIndex];

  const setRating = (itemId: string, value: number) => {
    setResults((prev) =>
      prev.map((res, idx) =>
        idx === currentIndex
          ? {
            ...res,
            ratings: {
              ...res.ratings,
              [itemId]: value,
            },
          }
          : res
      )
    );
  };

  const isCurrentStimulusCompleted = Object.values(
    currentResult.ratings
  ).every((v) => v !== null);

  return {
    currentIndex,
    currentStimulus,
    currentResult,
    setRating,
    isCurrentStimulusCompleted,
    setCurrentIndex,
    results,
  };
};