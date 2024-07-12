'use client'
import { useState } from "react";


import DptSection from "../components/DptSection/DptSection";
import SearchResultsList from "../components/SearchResultList/SearchResultList";




function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <DptSection setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default App;