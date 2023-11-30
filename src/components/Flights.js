import { Fragment } from "react";
import { Card } from "../components/Card";
import { Modal } from "../components/Modal";

export const Flights = ({ filteredFlights }) => {
  return (
    <>
      <div className="row mt-4">
        {filteredFlights.map((flight) => (
          <Fragment>
            <Card flight={flight} />
            <Modal flight={flight} />
          </Fragment>
        ))}
      </div>
    </>
  );
};
