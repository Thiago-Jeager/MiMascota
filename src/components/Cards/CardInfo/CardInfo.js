import { Card } from "react-bootstrap";
function CardInfo({number}) {
  return (
    <>
      {/* Card Izquierda */}
      <div className=" col-lg-4 col-md-12 d-flex justify-content-center">
        <div className=" top-0 shadow p-3 mb-5 bg-body-tertiary rounded">
          <Card.Header>{number}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </div>
      </div>
    </>
  );
}
export default CardInfo;
