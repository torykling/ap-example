import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchContacts } from "../actions/index.js";

export class List extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newContact) {
      this.props.contacts.unshift(nextProps.newContact);
    }
  }
  render() {
    const contacts = this.props.contacts.map(contact => (
      <div key={contact._id}>
        <ul>
          <li>{contact.name}</li>
          <li>{contact.email}</li>
          <li>{contact.phone}</li>
          <li>{contact.id}</li>
        </ul>
      </div>
    ));
    return (
      <div>
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
  contacts: state.contacts.items,
  newContact: state.contacts.item
});
export default connect(mapStateToProps, { fetchContacts })(List);
