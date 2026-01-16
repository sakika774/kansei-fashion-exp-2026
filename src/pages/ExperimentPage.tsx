import { buildExperimentResult } from "../utils/buildExperimentResult";
import { useExperimentState } from "../hooks/useExperimentState";
import { experimentConfig } from "../config/experimentConfig";
import { buildExperimentCsvRows } from "../utils/buildExperimentCsvRows";
import { downloadCsv } from "../utils/downloadCsv";

const ExperimentPage = () => {
  const {
    currentStimulus,
    currentResult,
    setRating,
    isCurrentStimulusCompleted,
    currentIndex,
    setCurrentIndex,
    results,
  } = useExperimentState();

  const isLast = currentIndex === experimentConfig.stimuli.length - 1;

  const handleNext = () => {
    if (!isCurrentStimulusCompleted) return;

    if (isLast) {
      const experimentResult = buildExperimentResult(
        "test-participant",
        results
      );
      console.log("Experiment Result:", experimentResult);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleComplete = () => {
    const result = buildExperimentResult(
      "test-participant",
      results
    );
    const rows = buildExperimentCsvRows(result);

    downloadCsv(
      rows,
      `experiment-result-${Date.now()}.csv`
    );
  };


  return (
    <div>
      <h1>実験</h1>

      <img
        src={currentStimulus.imageUrl}
        alt=""
        style={{ maxWidth: "400px" }}
      />

      {experimentConfig.ratingScale.items.map((item) => (
        <div key={item.id}>
          <p>{item.label}</p>

          {experimentConfig.ratingScale.labels.map((label, value) => (
            <label key={value} style={{ marginRight: 8 }}>
              <input
                type="radio"
                name={item.id}
                value={value}
                checked={currentResult.ratings[item.id] === value}
                onChange={() => setRating(item.id, value)}
              />
              {label}
            </label>
          ))}
        </div>
      ))}

      {isLast ? (
        <button
          onClick={handleComplete}
          disabled={!isCurrentStimulusCompleted}
        >
          完了（CSV保存）
        </button>
      ) : (
        <button
          onClick={handleNext}
          disabled={!isCurrentStimulusCompleted}
        >
          次へ
        </button>
      )}
    </div>
  );
};

export default ExperimentPage;