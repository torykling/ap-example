import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../actions";
import { Redirect } from "react-router-dom";

export class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleted: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.deleteContact(this.props.id);
    this.setState({ isDeleted: true });
  }
  render() {
    if (this.state.isDeleted) {
      return <Redirect to={"/"} />;
    }
    return (
      <div>
        <button onClick={this.onSubmit} className="greyButton" type="submit">
          Delete
        </button>
      </div>
    );
  }
}
Delete.propTypes = {
  deleteContact: PropTypes.func.isRequired
};

export default connect(null, { deleteContact })(Delete);
