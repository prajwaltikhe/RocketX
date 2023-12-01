import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';

export const Alerts = ({ variant, children }) => {
  return (
    <Alert variant={variant}>
      <strong>{children}</strong>
    </Alert>
  );
};

Alerts.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
