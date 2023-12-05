import { Row, Col, Card, Image, ListGroup } from 'react-bootstrap';
import { FlightModal } from './Modal';

const FlightCard = ({ flight }) => {
  return (
    <Col lg={4} className="w-100">
      <Card className="text-center" key={flight.flight_number}>
        <Image
          src={flight.links.mission_patch_small}
          className="mt-3"
          alt={`Mission Patch for ${flight.mission_name}`}
        />
        <Card.Body>
          <Card.Title className="mb-0" style={{ fontSize: '1.5rem' }}>
            {flight.mission_name} Mission
          </Card.Title>
          <ListGroup variant="flush" className="mb-2">
            <ListGroup.Item>
              <strong>Rocket name:</strong> {flight.rocket.rocket_name}
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col md={6}>
                  <strong>Rocket type:</strong> <br />
                  {flight.rocket.rocket_type}
                </Col>
                <Col md={6}>
                  <strong>Launched on:</strong> <br />
                  {flight.launch_date_local.substring(0, 10)}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col md={6}>
                  <strong>Status:</strong> {''}
                  {flight.launch_success ? 'Success' : 'Failure'}
                </Col>
                <Col md={6}>
                  <strong>Upcoming:</strong> {flight.upcoming ? 'Yes' : 'No'}
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
          <FlightModal flight={flight} className="mt-2" />
        </Card.Body>
      </Card>
    </Col>
  );
};

export { FlightCard, FlightModal };
