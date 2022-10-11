import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/Search/Search";
import SearchProvider from "./storage/SearchProvider";
import { Route, Switch } from "react-router-dom";
import Film from "./components/FilmPage/Film";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <SearchProvider>
          <NavBar />
          <Search />
        </SearchProvider>
      </Route>
      <Route path="/films/:id">
        <Film />
      </Route>
    </Switch>
  );
};

export default App;
