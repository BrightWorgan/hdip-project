import {
  Container,
  Col,
  Row,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
} from "reactstrap";
import Views from "./views.enum";

const AllReportCards = (props: any) => {
  const contextClick = () => {
    props.onViewChange(Views.context);
  };

  const findsClick = () => {
    props.onViewChange(Views.finds);
  };

  return (
    <div>
      <div>
        <Container>
          <Row>
            <Col xs="4">
              <Card>
                <CardBody>
                  <CardTitle tag="h5">Context Register:</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Cut and Fill Numbers
                  </CardSubtitle>
                  <CardImg
                    alt="Card image cap"
                    src="src/assets/contextLayersCavanSite.jpg"
                    className="ss-"
                  />
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>
                  <Button className="ss-info-btn" onClick={contextClick}>
                    View Context Register
                  </Button>
                </CardBody>
              </Card>
            </Col>

            <Col xs="4">
              <Card>
                <CardBody>
                  <CardTitle tag="h5">Find Register:</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    All Finds
                  </CardSubtitle>
                  <CardImg
                    alt="https://microsites.museum.ie/bronzeagehandlingbox/bronze-age.html"
                    src="src/assets/copperFinds.jpg"
                  />
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>
                  <Button className="ss-info-btn" onClick={findsClick}>
                    View Finds Table
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col xs="4">
              <Card>
                <CardBody>
                  <CardTitle tag="h5">Sample Register:</CardTitle>
                  <CardImg
                    alt="Bags of soil"
                    src="src/assets/soilSamples.jpeg"
                  />
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Soil Samples
                  </CardSubtitle>
                  <CardText>Coming Soon ....</CardText>
                  <br />
                  <br />
                  <Button color="disabled">View Sample Table</Button>
                </CardBody>
              </Card>
            </Col>
            {/* <Col xs="4">
              <Card
                style={{
                  width: "18rem",
                }}
              >
                <img
                  alt="Card image cap"
                  src="src/assets/trimCastlePano1200.jpg"
                />
                <CardBody>
                  <CardTitle tag="h5">Wood Sample Register:</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Wood Samples
                  </CardSubtitle>
                  <CardText>Coming Soon ....</CardText>
                  <br />
                  <Button color="disabled">Wood Samples</Button>
                </CardBody>
              </Card>
            </Col>
            <Col xs="4">
              <Card
                style={{
                  width: "18rem",
                }}
              >
                <img
                  alt="Cabinteely burial under excavation (Photo Ken Wiggins/Judith Carroll), http://irisharchaeology.ie/2015/10/medieval-burials-discovered-at-cabinteely-co-dublin/"
                  src="src/assets/remainsBeingExcavated.jpg"
                />
                <CardBody>
                  <CardTitle tag="h5">Bone Sample Register:</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Bone Sample Register
                  </CardSubtitle>
                  <CardText>Coming Soon ....</CardText>
                  <br />
                  <Button color="disabled">Bone Samples</Button>
                </CardBody>
              </Card>
            </Col>
            <Col xs="4">
              <Card
                style={{
                  width: "18rem",
                }}
              >
                <img
                  alt="Card image cap"
                  src="src/assets/trimCastlePano1200.jpg"
                />
                <CardBody>
                  <CardTitle tag="h5">Animal Bone Sample Register:</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Animal Bone Sample Register
                  </CardSubtitle>
                  <CardText>Coming Soon ....</CardText>
                  <br />
                  <Button color="disabled">Bone Samples</Button>
                </CardBody>
              </Card>
            </Col> */}
          </Row>
        </Container>
        <br />
      </div>
    </div>
  );
};
export default AllReportCards;
