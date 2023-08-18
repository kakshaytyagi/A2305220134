import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllTrainsPage from "./components/AllTrainsPage";
import SingleTrainPage from "./components/SingleTrainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllTrainsPage />} />
        <Route path="/train/:trainNumber" element={<SingleTrainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
