import { Container, Row, Col } from 'react-bootstrap';
import { FlightCard } from '../components/Card';

export const Flights = ({ filteredFlights }) => {
  return (
    <Container className="mt-4">
      <Row>
        {filteredFlights.map((flight) => (
          <Col lg={4} key={flight.flight_number}>
            <FlightCard flight={flight} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
