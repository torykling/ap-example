// This is the update component. It invokes the updateContact action creator when the user submits.
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateContact } from "../actions";
import Delete from "./Delete";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // This method handles the changes the user makes to the input fields.
  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  // This method updates the contact with the new data saved to state and changes the
  // message the user sees.

  onSubmit(e) {
    e.preventDefault();
    const data = {
      id: this.props.match.params.id,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    };
    this.props.updateContact(data);
    this.setState({ message: "Contact has been updated!" });
  }

  render() {
    return (
      <div className="update">
        <h4>Update this contact</h4>
        <h4>Id Number: {this.props.match.params.id}</h4>
        <form className="updateForm" onSubmit={this.onSubmit}>
          <div>
            <div>
              <label>Name: </label>
              <input
                className="textbox"
                onChange={this.onChange}
                type="text"
                name="name"
              />
            </div>
            <br />
            <div>
              <label>Email: </label>
              <input
                className="textbox"
                onChange={this.onChange}
                type="text"
                name="email"
              />
            </div>
            <br />
            <div>
              <label>Phone: </label>
              <input
                className="textbox"
                onChange={this.onChange}
                type="text"
                name="phone"
              />
            </div>
            <br />
          </div>
          {/* The update form contains a submit button and a delete button. */}
          <div className="buttonContainer">
            <input className="greenButton" type="submit" value="Update" />
            <Delete id={this.props.match.params.id} />
          </div>
        </form>
        {/* The message the user sees when the contact has been updated */}
        <h4>{this.state.message}</h4>
      </div>
    );
  }
}
Update.propTypes = {
  updateContact: PropTypes.func.isRequired
};

export default connect(null, { updateContact })(Update);
