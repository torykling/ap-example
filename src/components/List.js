import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchContacts } from "../actions/index.js";
import Search from "./Search";
import Update from "./Update";

export class List extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const contacts = this.props.contacts.map(contact => (
      <div style={contactStyle}>
        <div className="contactCard">
          <ul key={contact.id}>
            <li>
              <b>Name: </b>
              {contact.name}
            </li>
            <li>
              <b>Email: </b> {contact.email}
            </li>
            <li>
              {" "}
              <b>Phone: </b>
              {contact.phone}
            </li>
            <li>
              <b>Id: </b>
              {contact.id}
            </li>
          </ul>
        </div>
        <div>
          <Update contact={contact} />
        </div>
      </div>
    ));
    return (
      <div className="container">
        <div>
          <Search />
        </div>
        <h1 className="allContacts">All Contacts</h1>
        {contacts}
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

const contactStyle = {
  display: "flex",
  justifyContent: "space-evenly"
};
