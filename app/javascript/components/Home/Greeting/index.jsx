import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

const Greeting = ({ name }) => (
  <div className="col-grid">
    <div className="col-12">
      <Alert variant="primary" className="greeting__name">
        Hello {name}
      </Alert>
    </div>
  </div>
);

Greeting.defaultProps = {
  name: 'Alex',
};

Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;
