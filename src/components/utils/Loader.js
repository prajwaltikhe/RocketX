import { Spinner } from 'react-bootstrap';

export const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="border" variant="light" role="status" />
    </div>
  );
};
