import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import UsersList from './UsersList';

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/users" component={UsersList} />
  </div>
);
