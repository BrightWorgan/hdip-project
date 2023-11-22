import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  Row,
  Col,
  Button,
} from "reactstrap";

const Cardbox = (props: any) => {
  return (
    <Row>
      {props.cardData.map((project: any) => (
        <Col xs="4">
          <Card>
            <CardImg
              alt="Card image cap"
              src="src/assets/IMAG3201.jpg"
              style={{
                padding: "5%",
              }}
            />
            <CardBody>
              <CardTitle tag="h5">{project.name}</CardTitle>
              <CardSubtitle tag="h6">
                Licence #: {project.licenceNumber}
              </CardSubtitle>
              <CardText>
                Site ID:{project.siteID}
                <br />
                Location: {project.projectLocation}
                <br />
                Director: {project.director}
                <br />
                Date Started: {new Date(project.startDate).toDateString()}
                <br />
                Description:{project.description}
                <br />
                Type: {project.contract}
              </CardText>
              <Button
                className="ss-info-btn"
                onClick={() => props.onSelect(project)}
              >
                Project Details
              </Button>
              <br />
            </CardBody>
            <br />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Cardbox;
