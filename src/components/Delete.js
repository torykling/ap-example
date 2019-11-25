import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../actions";

export class Delete extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.deleteContact(this.props.id);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="submit" value="Delete Contact" />
        </form>
      </div>
    );
  }
}
Delete.propTypes = {
  deleteContact: PropTypes.func.isRequired
};

export default connect(null, { deleteContact })(Delete);
