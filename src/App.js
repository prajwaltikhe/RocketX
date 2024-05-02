import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Flights } from './components/Flights';
import { flightList } from './redux/flightListSlice';
import { Loader } from './components/utils/Loader';
import { Alerts } from './components/utils/Alerts';

const App = () => {
  const [searchFlights, setSearchFlights] = useState('');

  const { flights, pending, error } = useSelector(
    ({ flightList }) => flightList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(flightList());
  }, [dispatch]);

  const filteredFlights = flights.filter((flight) => {
    if (searchFlights === '') {
      return true;
    }
    return flight.mission_name
      .toLowerCase()
      .includes(searchFlights.toLowerCase());
  });

  return (
    <Container>
      <h1 className="head">RocketX</h1>
      <Row className="flex search mx-auto">
        <Col xs={12}>
          <Form.Control
            className="searchbar"
            type="text"
            placeholder="Search flight missions..."
            onChange={(e) => setSearchFlights(e.target.value)}
          />
        </Col>
      </Row>
      {pending ? (
        <Loader />
      ) : error ? (
        <Alerts variant="danger">{error}</Alerts>
      ) : (
        <Flights filteredFlights={filteredFlights} />
      )}
    </Container>
  );
};

export default App;
