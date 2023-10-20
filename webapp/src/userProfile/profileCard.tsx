import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  CardImg,
  Col,
  Row,
  Button,
  CardHeader,
} from "reactstrap";

import {
  lightColors,
  darkColors,
  // @ts-ignore
} from "react-floating-action-button";

const ProfileCard = () => {
  return (
    <Row>
      <Col xs="4">
        <Card>
          <CardHeader>
            <Row>
              <Col xs={3}>
                <CardImg
                  alt="Card image cap"
                  src="src/assets/meZeusandSkadi.jpg"
                  height="100%"
                  //   width="25px"
                  style={{
                    // width: "5%",
                    // width: "25px",
                    //   height: "100%",
                    borderRadius: "50%",
                    overflow: "hidden",
                    borderWidth: 3,
                    borderColor: "red",
                  }}
                />
              </Col>
              <Col
                style={{
                  display: "flex",
                  //   justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h2>Sarah Halford</h2>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <CardTitle tag="h5">Title </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              subtitle
            </CardSubtitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec qu
            </CardText>
            <Button
              styles={{
                backgroundColor: darkColors.cyan,
                color: lightColors.teal,
              }}
              //  icon="fab fa-twitter"
              target="_blank"
              href="https://www.linkedin.com/in/sarah-halford-369b1414b/"
            >
              LinkedIn
            </Button>
            <Button
              styles={{
                backgroundColor: darkColors.cyan,
                color: lightColors.teal,
              }}
              //  icon="fab fa-twitter"
              target="_blank"
              href="https://twitter.com/"
            >
              Twitter
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ProfileCard;
