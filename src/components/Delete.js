import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../actions";

export class Delete extends Component {
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
    const data = {
      id: this.state.id
    };
    this.props.deleteContact(data);
  }
  render() {
    return (
      <div>
        <h1>Delete a contact</h1>
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

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
Delete.propTypes = {
  deleteContact: PropTypes.func.isRequired
};
export default connect(null, { deleteContact })(Delete);
