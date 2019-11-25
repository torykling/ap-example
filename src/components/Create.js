import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createContact } from "../actions";

export class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      email: "",
      phone: ""
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
    const data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    };
    this.props.createContact(data);
  }
  render() {
    return (
      <div className="create">
        <h1>Add a new contact</h1>
        <form className="addForm" onSubmit={this.onSubmit}>
          <div>
            <label>Name:</label>
            <input
              onChange={this.onChange}
              type="text"
              name="name"
              value={this.state.name}
            />
          </div>
          <br />
          <div>
            <label>Email:</label>
            <input
              onChange={this.onChange}
              type="text"
              name="email"
              value={this.state.email}
            />
          </div>
          <br />
          <div>
            <label>Phone:</label>
            <input
              onChange={this.onChange}
              type="text"
              name="phone"
              value={this.state.phone}
            />
          </div>
          <br />
          <input className="greenButton" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
Create.propTypes = {
  createContact: PropTypes.func.isRequired
};
export default connect(null, { createContact })(Create);
