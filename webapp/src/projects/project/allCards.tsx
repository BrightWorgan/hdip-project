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
import Views from "../views.enum";

const AllReportCards = (props: any) => {
  const contextClick = () => {
    props.onViewChange(Views.context);
  };

  const findsClick = () => {
    props.onViewChange(Views.finds);
  };

  const cards = [
    {
      title: "Context Register",
      subtitle: "Cut and Fill Numbers",
      description: "Some description",
      onClick: contextClick,
      buttonTitle: "View Context Register",
      imgURL: "src/assets/contextLayersCavanSite.jpg",
    },
  ];

  return (
    <div>
      <div>
        <Container>
          <Row>
            {cards.map((card) => (
              <Col xs="4" style={{ padding: "10px" }}>
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">{card.title}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {card.subtitle}
                    </CardSubtitle>
                    <CardImg
                      alt="Card image cap"
                      src={card.imgURL}
                      style={{
                        height: "208px",
                      }}
                    />
                    <CardText>{card.description}</CardText>
                    <Button
                      className="ss-info-btn"
                      onClick={() => card.onClick()}
                    >
                      {card.buttonTitle}
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            ))}

            <Col xs="4">
              <Card>
                <CardBody>
                  <CardTitle tag="h5">Find Register :</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    All Finds
                  </CardSubtitle>
                  <CardImg
                    alt="irish bronze age artifacts image source: https://microsites.museum.ie/bronzeagehandlingbox/bronze-age.html"
                    src="src/assets/copperFinds.jpg"
                    style={{
                      height: "208px",
                    }}
                  />
                  <CardText>
                    Li Europan lingues es membres del sam familie. Lor separat
                    existentie es un myth. Por scientie, musi
                  </CardText>
                  <Button className="ss-info-btn" onClick={findsClick}>
                    View Finds Table
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col xs="4">
              <Card>
                <CardBody
                  style={{
                    height: "396.8px",
                  }} /* 396.8px is the height of the other two cards*/
                >
                  <CardTitle tag="h5">Sample Register :</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    All Soil Samples
                  </CardSubtitle>
                  <CardImg
                    alt="Bags of soil"
                    src="src/assets/soilSamples.jpeg"
                    style={{
                      height: "208px",
                    }}
                  />
                  <br></br>
                  <CardText>
                    Li Europan lingues es membres del sam familie. Lor separat
                    existentie es un myth. Por scientie, musi
                  </CardText>
                  <Button color="disabled">Coming Soon ....</Button>
                </CardBody>
              </Card>
            </Col>
            {/* Second row of cards */}
            <Col xs="4">
              <Card>
                <CardBody
                  style={{
                    height: "396.8px",
                  }}
                >
                  <CardTitle tag="h5">Wood Sample Register:</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Wood Samples
                  </CardSubtitle>
                  <CardImg
                    alt="image with the text 'comming soon'"
                    src="src/assets/commingSoon.png"
                    style={{
                      height: "208px",
                    }}
                  />
                  <CardText>
                    Li Europan lingues es membres del sam familie. Lor separat
                    existentie es un myth. Por scientie, musi
                  </CardText>
                  <Button color="disabled">Coming Soon ....</Button>
                </CardBody>
              </Card>
            </Col>
            <Col xs="4">
              <Card>
                <CardBody
                  style={{
                    height: "396.8px",
                  }}
                >
                  <CardTitle tag="h5">Bone Sample Register:</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Bone Sample Register
                  </CardSubtitle>
                  <CardImg
                    alt="image with the text 'comming soon'"
                    src="src/assets/commingSoon.png"
                    style={{
                      height: "208px",
                    }}
                  />
                  <CardText>
                    Li Europan lingues es membres del sam familie. Lor separat
                    existentie es un myth. Por scientie, musi
                  </CardText>
                  <Button color="disabled">Coming Soon ....</Button>
                </CardBody>
              </Card>
            </Col>
            <Col xs="4">
              <Card>
                <CardBody
                  style={{
                    height: "396.8px",
                  }}
                >
                  <CardTitle tag="h5">Animal Bone Sample Register:</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Animal Bone Sample Register
                  </CardSubtitle>
                  <CardImg
                    alt="image with the text 'comming soon'"
                    src="src/assets/commingSoon.png"
                    style={{
                      height: "208px",
                    }}
                  />
                  <CardText>
                    Li Europan lingues es membres del sam familie. Lor separat
                    existentie es un myth. Por scientie, musi
                  </CardText>
                  <Button color="disabled">Coming Soon ....</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <br />
      </div>
    </div>
  );
};
export default AllReportCards;
