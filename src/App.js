import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import requests from "./requests";
import Results from "./Results";
function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="app">
      <Header />
      {/* Header */}
      <Nav setSelectedOption={setSelectedOption} />
      {/* Navigation */}
      <Results selectedOption={selectedOption} />
      {/* Result */}
    </div>
  );
}

export default App;
