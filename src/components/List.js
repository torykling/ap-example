// This is the list component. It invokes the fetchContacts action creator to fetch all of the contacts from the server
// and then maps through the new state to render information about each contact on the home page.
// The list component also holds our search component nested inside it.
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchContacts } from "../actions/index.js";
import Search from "./Search";
import { Link } from "react-router-dom";

export class List extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const contacts = this.props.contacts.map(contact => (
      <li key={contact.id}>
        <div className="contactContainer">
          <div className="contactCard">
            <p>
              <label>Name: </label>
              {contact.name}
            </p>
            <p>
              <label>Email: </label> {contact.email}
            </p>
            <p>
              {" "}
              <label>Phone: </label>
              {contact.phone}
            </p>
            <p>
              <label>Id: </label>
              {contact.id}
            </p>
          </div>
          <div>
            <Link className="link" to={`/update/${contact.id}`}>
              <button className="greenButton">Update Contact</button>
            </Link>
          </div>
        </div>
      </li>
    ));
    return (
      <div className="container">
        <div>
          <Search />
        </div>
        <h1 className="allContacts">All Contacts</h1>
        <ul>{contacts}</ul>
      </div>
    );
  }
}
List.propTypes = {
  fetchContacts: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired
};
// mapStateToProps allows us to use the new state from the store as a prop in this component.
const mapStateToProps = state => ({
  contacts: state.contacts.items
});
export default connect(mapStateToProps, { fetchContacts })(List);
