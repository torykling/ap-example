import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateContact, fetchContact } from "../actions";
import Delete from "./Delete";

export class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.contact.name,
      email: this.props.contact.email,
      phone: this.props.contact.phone,
      message: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchContact();
  }
  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
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
        <form className="updateForm" onSubmit={this.onSubmit}>
          <div>
            <div>
              <label>Name: </label>
              <input
                onChange={this.onChange}
                type="text"
                name="name"
                value={this.state.name}
              />
            </div>
            <br />
            <div>
              <label>Email: </label>
              <input
                onChange={this.onChange}
                type="text"
                name="email"
                value={this.state.email}
              />
            </div>
            <br />
            <div>
              <label>Phone: </label>
              <input
                onChange={this.onChange}
                type="text"
                name="phone"
                value={this.state.phone}
              />
            </div>
            <br />
          </div>
          <div className="buttonContainer">
            <input className="greenButton" type="submit" value="Update" />
            <Delete id={this.props.match.params.id} />
          </div>
        </form>
        <h4>{this.state.message}</h4>
      </div>
    );
  }
}
Update.propTypes = {
  updateContact: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  contact: state.contacts.item
});
export default connect(mapStateToProps, { updateContact, fetchContact })(
  Update
);
