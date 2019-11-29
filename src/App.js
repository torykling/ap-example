// Here react router handles our routes to the home page, which will return the list of contacts, the create page,
// where the user will be able to add a contact, and the update page, where the user will be able to
// update a contact.

import React from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
import List from "./components/List";
import Create from "./components/Create";
import Update from "./components/Update";

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
        <Route
          path="/update/:id"
          exact
          render={routerProps => <Update {...routerProps} />}
        />
      </main>
    </div>
  );
}

export default App;
