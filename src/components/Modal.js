export const Modal = ({ flight }) => {
  return (
    <div
      className="modal fade"
      id={`popup${flight.flight_number}`}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {flight.mission_name} Mission ({flight.launch_year})
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <strong>Flight number: </strong>
            {flight.flight_number}
            <br />
            <strong>Rocket name: </strong>
            {flight.rocket.rocket_name}
            <br />
            <strong>Rocket type: </strong>
            {flight.rocket.rocket_type}
            <br />
            <strong>Launched on: </strong>
            {flight.launch_date_local.substring(0, 10)}
            <br />
            <strong>Launch site: </strong>
            {flight.launch_site.site_name_long}
            <br />
            <strong> Status: </strong>
            {flight.launch_success === true ? "Success" : "Failure"}
            <br />
            <strong> Upcoming: </strong>
            {flight.upcoming === false ? "No" : "Yes"}
            <br />
            <strong> Details: </strong>
            {flight.details === null ? "NA" : flight.details}
            <br />
            <div className="text-center mt-2">
              <div className="row">
                <div className="col-4">
                  <a className="references" href={`${flight.links.wikipedia}`}>
                    <i class="fa-brands fa-wikipedia-w"></i> Wikipedia
                  </a>
                </div>
                <div className="col-4">
                  <a className="references" href={`${flight.links.video_link}`}>
                    <i class="fa-brands fa-youtube"></i> Youtube
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="references"
                    href={`${flight.links.article_link}`}
                  >
                    <i class="fa-solid fa-newspaper"></i> Articles
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
