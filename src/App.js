import React from "react";
import { Link, Route } from "react-router-dom";
import List from "./components/List";
import "./App.css";

import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <nav>
        <Link className="link" to="/">
          Home
        </Link>{" "}
        <Link className="link" to="/search">
          Search
        </Link>
      </nav>
      <Route path="/" exact render={routerProps => <List />} />
      <Route path="/search" exact render={routerProps => <Search />} />
    </div>
  );
}

export default App;
