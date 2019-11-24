import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateContact } from "../actions";

export class Update extends Component {
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
    this.props.updatePost(data);
  }
  render() {
    return (
      <div>
        <h1>Update a contact</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Id:</label>
            <input
              onChange={this.onChange}
              type="text"
              name="id"
              value={this.state.id}
            />
          </div>
          <br />
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
Update.propTypes = {
  updateContact: PropTypes.func.isRequired
};
export default connect(null, { updateContact })(Update);
