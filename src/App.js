import React from "react";
import { Link, Route } from "react-router-dom";
import List from "./components/List";
import "./App.css";
import Create from "./components/Create";

function App() {
  return (
    <div className="App">
      <nav>
        <Link className="link" to="/">
          Home
        </Link>{" "}
        <Link className="link" to="/create">
          Add Contact
        </Link>
      </nav>
      <main>
        <Route path="/" exact render={routerProps => <List />} />
        <Route path="/create" exact render={routerProps => <Create />} />
      </main>
    </div>
  );
}

export default App;
