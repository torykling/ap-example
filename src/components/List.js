import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchContacts } from "../actions/index.js";
import Delete from "./Delete";
import Create from "./Create";

export class List extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const contacts = this.props.contacts.map(contact => (
      <div>
        <ul key={contact.id}>
          <li>{contact.name}</li>
          <li>{contact.email}</li>
          <li>{contact.phone}</li>
          <li>{contact.id}</li>
        </ul>
        <Delete id={contact.id} />
      </div>
    ));
    return (
      <div>
        <Create />
        <h1>All Contacts</h1>
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
