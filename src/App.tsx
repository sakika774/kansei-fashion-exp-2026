import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import ExperimentPage from "./pages/ExperimentPage";
import FinishPage from "./pages/FinishPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/experiment" element={<ExperimentPage />} />
        <Route path="/finish" element={<FinishPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;