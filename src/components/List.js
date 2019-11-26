import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchContacts } from "../actions/index.js";
import Search from "./Search";
import Update from "./Update";
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
            <ul>
              <li>
                <label>Name: </label>
                {contact.name}
              </li>
              <li>
                <label>Email: </label> {contact.email}
              </li>
              <li>
                {" "}
                <label>Phone: </label>
                {contact.phone}
              </li>
              <li>
                <label>Id: </label>
                {contact.id}
              </li>
            </ul>
          </div>
          <div>
            {/* <Update contact={contact} /> */}
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
const mapStateToProps = state => ({
  contacts: state.contacts.items
});
export default connect(mapStateToProps, { fetchContacts })(List);
