'use client'
import SearchResult from "../SearchResult/SearchResult";





export default function SearchResultsList  ({ results })  {
  return (
    <div className="results-list absolute left-[37%] bottom-[36%] z-1 bg-[#e5e5e5]">
      {results.map((result) => {
        return <SearchResult result={result.title}  />;
       
      })}
    </div>
  );
};

SearchResultsList.defaultProps = {
    results: () => {},
  };