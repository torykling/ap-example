// Here we define the Create component. This is the component that allows
// a user to add a new contact.
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createContact } from "../actions";

class Create extends Component {
  constructor(props) {
    super(props);
    // Here in the component-level state we can collect the information the user
    // enters in the input fields and save a message that will change when the
    // user submits a response.
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "Please enter all fields"
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  // This method updates state as the user types in a field.
  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  // This method invokes our createContact action creator if the user has
  // entered data in all three fields and hit submit
  onSubmit(e) {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    };
    if (this.state.name && this.state.email && this.state.phone) {
      this.props.createContact(data);
      this.setState({ message: "Contact added!" });
    }
  }
  render() {
    return (
      <div>
        <div className="create">
          <h2>Add a new contact</h2>
          {/* In the render we have an input form */}
          <form className="addForm" onSubmit={this.onSubmit}>
            <div>
              <label>Name:</label>
              <input
                className="textbox"
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
                className="textbox"
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
                className="textbox"
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
        {/* We also have a form where the user sees a preview of the contact information they're typing */}
        <div className="contactCard previewContact">
          <ul>
            <li>
              <b>Name: </b>
              {this.state.name}
            </li>
            <li>
              <b>Email: </b> {this.state.email}
            </li>
            <li>
              {" "}
              <b>Phone: </b>
              {this.state.phone}
            </li>
          </ul>
          {/* Here the user sees the message that will update if the form is submitted properly */}
          <h4>{this.state.message}</h4>
        </div>
      </div>
    );
  }
}
// propTypes makes sure the data we receive is of a valid type (in this case, checking that createContact is a function and is required).
Create.propTypes = {
  createContact: PropTypes.func.isRequired
};
export default connect(null, { createContact })(Create);
