import { Modal, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import { FaNewspaper, FaYoutube, FaWikipediaW } from "react-icons/fa";

export const FlightModal = ({ flight }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View More
      </Button>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title id={`popup${flight.flight_number}`}>
            {flight.mission_name} Mission ({flight.launch_year})
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Flight number:</strong> {flight.flight_number}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Rocket name:</strong> {flight.rocket.rocket_name}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Rocket type:</strong> {flight.rocket.rocket_type}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Status:</strong>{' '}
                  {flight.launch_success ? 'Success' : 'Failure'}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Upcoming:</strong> {flight.upcoming ? 'Yes' : 'No'}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Launched on:</strong>{' '}
                  {flight.launch_date_local.substring(0, 10)}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <span>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Launch site:</strong> <br />
                  {flight.launch_site.site_name_long}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Details:</strong> <br />
                  {flight.details === null ? 'NA' : flight.details}
                </ListGroup.Item>
              </ListGroup>
            </span>
          </Row>
          <div className="text-center mt-2">
            <Row>
              <Col>
                <a className="references" href={flight.links.wikipedia}>
                  <FaWikipediaW /> Document
                </a>
              </Col>
              <Col>
                <a className="references" href={flight.links.video_link}>
                  <FaYoutube /> Video
                </a>
              </Col>
              <Col>
                <a className="references" href={flight.links.article_link}>
                  <FaNewspaper /> Articles
                </a>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
