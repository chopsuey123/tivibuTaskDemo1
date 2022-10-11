import React from "react";

const SearchContext = React.createContext({
  showSearch: false,
  showSearchHandler: () => {},
  
});
export default SearchContext;