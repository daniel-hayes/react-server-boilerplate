import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import routes from '../../routes';
import Footer from './Footer';

const App = (props) => {
  const Route = _.find(routes, { path: props.app.path });

  return (
    <div>
      <Route.component {...props} />
      <Footer />
    </div>
  );
};

App.propTypes = {
  app: PropTypes.shape({
    path: PropTypes.string
  })
};

export default connect(state => state)(App);
