import { useRef } from "react";
import { useKey } from "../useKey";

/* eslint-disable react/prop-types */
export function SearchBar({ query, setQuery }) {
  const inputElement = useRef(null);

  useKey(function () {
    if (document.activeElement === inputElement.current) return;
    inputElement.current.focus();
    setQuery("");
  }, "Enter");

  return (
    <input
      ref={inputElement}
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
