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
// import ToggleBtn from "./toggleBtn";

const Cardbox = (props: any) => {
  return (
    <Row>
      {props.cardData.map((project) => (
        <Col xs="4">
          <Card>
            <CardImg
              alt="Card image cap"
              src={project.imgSrc}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">{project.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {project.licenceNumber}
              </CardSubtitle>
              <CardText>
                {project.location}
                {project.siteID}
                <br />
                {project.description}
              </CardText>
              {/* <ToggleBtn /> */}

              <Button onClick={() => props.onSelect(project)}>
                Project Details
              </Button>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Cardbox;
