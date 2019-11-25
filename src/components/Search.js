import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchContact } from "../actions";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.fetchContact(this.state.id);
  }
  render() {
    return (
      <div>
        <h1>Search for a contact</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Search By Id:</label>
            <input
              onChange={this.onChange}
              type="text"
              name="id"
              value={this.state.id}
            />
          </div>
          <br />
          <input className="greenButton" type="submit" value="Submit" />
        </form>

        <div>
          <ul>
            <li>{this.props.contact.name}</li>
            <li>{this.props.contact.phone}</li>
            <li>{this.props.contact.email}</li>
          </ul>
        </div>
      </div>
    );
  }
}
Search.propTypes = {
  fetchContact: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  contact: state.contacts.item
});
export default connect(mapStateToProps, { fetchContact })(Search);
