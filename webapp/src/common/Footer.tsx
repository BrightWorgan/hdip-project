import { Col, Row } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">
          <Row>
            <Col xs={1}>
              <a target="_blank" href="https://www.facebook.com">
                <i class="fab fa-facebook-f"></i>
              </a>
            </Col>
            <Col xs={1}>
              <a target="_blank" href="https://www.twitter.com">
                <i class="fab fa-twitter"></i>
              </a>
            </Col>
            <Col xs={1}>
              <a
                target="_blank"
                href="https://github.com/BrightWorgan/hdip-project"
              >
                <i class="fab fa-github"></i>
              </a>
            </Col>
            <Col xs={1}>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/sarah-halford-369b1414b/"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </Col>
            <Col xs={1}>
              <a target="_blank" href="https://www.instagram.com/">
                <i class="fab fa-instagram"></i>
              </a>
            </Col>
            <Col xs={1}>
              <a target="_blank" href="https://www.googlemaps.com/">
                <i class="fas fa-map"></i>
              </a>
            </Col>
            <Col md={3}>
              <p></p>
            </Col>
            <Col md={3} className="ss-copywright">
              <p>©2023 Sheet Scribe</p>
            </Col>
          </Row>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
