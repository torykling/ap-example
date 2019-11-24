import React from "react";
import { Link, Route } from "react-router-dom";
import List from "./components/List";
import Create from "./components/Create";
import Search from "./components/Search";
import Update from "./components/Update";
import Delete from "./components/Delete";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> <Link to="/create">Create</Link>{" "}
        <Link to="/search">Search</Link> <Link to="/update">Update</Link>{" "}
        <Link to="/delete">Delete</Link>
      </nav>

      <Route path="/" exact render={routerProps => <List />} />
      <Route path="/create" exact render={routerProps => <Create />} />
      <Route path="/search" exact render={routerProps => <Search />} />
      <Route path="/update" exact render={routerProps => <Update />} />
      <Route path="/delete" exact render={routerProps => <Delete />} />
    </div>
  );
}

export default App;
