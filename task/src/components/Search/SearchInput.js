import React, { useContext } from "react";
import SearchContext from "../../storage/search-context";
import SearchIcon from "../UI/SearchIcon";
import DeleteIcon from "../UI/DeleteIcon";
import classes from "./Search.module.scss";

const SearchInput = (props) => {
  const searchCtx = useContext(SearchContext);

  const deleteIconHandler = () => {
    props.setDeleteIcon(false);
    props.setInputSearch("");
    props.setIsTouched(false);
  };

  const deleteIconClass = props.deleteIcon
    ? `${classes.exiticon}`
    : `${classes.exiticon2}`;

  const searchUsage = searchCtx.showSearch ? (
    <div className={classes.input}>
      <input
        id="search"
        type="text"
        placeholder="Search..."
        onChange={props.searchChangeHandler}
        value={props.inputSearch}
      />
      <span className={classes.searchicon}>
        <SearchIcon />
      </span>
      <span className={deleteIconClass} onClick={deleteIconHandler}>
        <DeleteIcon />
      </span>
    </div>
  ) : (
    ""
  );

  return <section>{searchUsage}</section>;
};

export default SearchInput;
