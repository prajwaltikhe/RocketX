import Spinner from 'react-bootstrap/Spinner';

export const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="border" variant="light" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};
