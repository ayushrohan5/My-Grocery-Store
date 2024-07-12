'use client'

import Link from "next/link";

export default function SearchResult  ({ result }) {
    return (
    <Link href='#prodsection'>  <div
        className="search-result"
      
      >
        {result}
      </div></Link>
    );
  };
  SearchResult.defaultProps = {
    result: () => {},
  };