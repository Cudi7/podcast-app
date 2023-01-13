/* eslint-disable @typescript-eslint/no-empty-function */
import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

const useSearchController = () => {
  const [filterName, setFilterName] = useState("");
  const [filteredNumber, setFilteredNumber] = useState<number>(100);

  const handleFilterByName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFilterName(e.target.value);
  };

  const handleNumberFilter = (number: number) => setFilteredNumber(number);

  const clearFilterName = () => setFilterName("");

  return {
    filterName,
    handleFilterByName,
    clearFilterName,
    handleNumberFilter,
    filteredNumber,
  };
};

const SearchContext = createContext<ReturnType<typeof useSearchController>>({
  filterName: "",
  filteredNumber: 100,
  handleFilterByName: () => {},
  handleNumberFilter: (number: number) => {},
  clearFilterName: () => {},
});

export const SearchProvider = ({ children }: { children: ReactNode }) => (
  <SearchContext.Provider value={useSearchController()}>
    {children}
  </SearchContext.Provider>
);

export const useSearch = () => useContext(SearchContext);
