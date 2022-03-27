import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage, HomePage } from "./pages/index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
