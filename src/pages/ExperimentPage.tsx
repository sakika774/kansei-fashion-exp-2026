import { useExperimentState } from "../hooks/useExperimentState";
import { experimentConfig } from "../config/experimentConfig";

const ExperimentPage = () => {
  const {
    currentStimulus,
    currentResult,
    setRating,
    isCurrentStimulusCompleted,
    currentIndex,
    setCurrentIndex,
  } = useExperimentState();

  const isLast = currentIndex === experimentConfig.stimuli.length - 1;

  const handleNext = () => {
    if (!isCurrentStimulusCompleted) return;

    if (isLast) {
      alert("実験完了（仮）");
    } else {
      setCurrentIndex(currentIndex + 1);
    }
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

      <button onClick={handleNext} disabled={!isCurrentStimulusCompleted}>
        次へ
      </button>
    </div>
  );
};

export default ExperimentPage;