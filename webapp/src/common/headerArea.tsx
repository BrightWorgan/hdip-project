import { Row, Col } from "reactstrap";

const HeaderArea = () => {
  return (
    <Row noGutters className="header-container">
      <Col xs={1}>
        <img
          className="ss-logo"
          src="src/assets/sheetScribeLogoNoBackgtound.png"
          alt="logo"
        />
      </Col>
      <Col xs={11}>
        <h2>Welcome to Sheet Scribe</h2>
        <h4>For all of your Traceable Archaeology and Heritage needs</h4>
      </Col>
    </Row>
  );
};

export default HeaderArea;
