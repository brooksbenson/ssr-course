import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';

class UsersList extends Component {
  render() {
    return (
      <ul>
        {this.props.users.map(({ name, id }) => (
          <li key={id}> {name} </li>
        ))}
      </ul>
    );
  }
}

export default connect(
  ({ users }) => ({ users }),
  { fetchUsers }
)(UsersList);
