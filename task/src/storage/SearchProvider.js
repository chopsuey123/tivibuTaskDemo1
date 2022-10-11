import SearchContext from "./search-context";
import React, { useState } from "react";

const SearchProvider = (props) => {
  const [showSearch, setShowSearch] = useState(false);
  const showSearchHandler = () => {
    setShowSearch(true);
  };
  
  const searchContext = {
    showSearch: showSearch,
    showSearchHandler: showSearchHandler,
    
  };
  return (
    <SearchContext.Provider value={searchContext}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
