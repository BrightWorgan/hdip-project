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
} from "reactstrap";

const AllReportCards = () => {
  return (
    <div>
      <div>
        <Container>
          <Row>
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
                  <CardTitle tag="h5">Context Register:</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Cut and Fill Numbers
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>
                  <Button
                    className="ss-info-btn"
                    // onClick={() => alert("Click is working!")}
                    // onClick={() }
                    // href="/contextRegisterPage.tsx"
                  >
                    View Context Register
                  </Button>
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
                  <CardTitle tag="h5">Find Register:</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    All Finds
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>
                  <Button className="ss-info-btn">View Finds Table</Button>
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
                  <CardTitle tag="h5">Sample Register:</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Soil Samples
                  </CardSubtitle>
                  <CardText>Coming Soon ....</CardText>
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
                  alt="Card image cap"
                  src="src/assets/trimCastlePano1200.jpg"
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
      </div>
    </div>
  );
};
export default AllReportCards;
