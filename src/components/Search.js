import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchContact } from "../actions";
import { Link } from "react-router-dom";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      class: "searchResult hidden"
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.fetchContact(this.state.id);
    if (this.props.contact.id) {
      this.setState({ class: "searchResult" });
    }
  }
  onClick(e) {
    this.setState({ class: "searchResult hidden" });
  }
  render() {
    return (
      <div className="searchField">
        <div>
          <h3>Search for a contact by id:</h3>
          <form className="searchForm" onSubmit={this.onSubmit}>
            <input
              className="textbox"
              onChange={this.onChange}
              type="text"
              name="id"
              value={this.state.id}
            />

            <input className="greenButton" type="submit" value="Submit" />
          </form>
        </div>
        <div className={this.state.class}>
          <ul>
            <li>{this.props.contact.name}</li>
            <li>{this.props.contact.phone}</li>
            <li>{this.props.contact.email}</li>
          </ul>

          <Link to={`/update/${this.props.contact.id}`}>
            <button className="greenButton" onClick={this.onClick}>
              Update Contact
            </button>
          </Link>
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
