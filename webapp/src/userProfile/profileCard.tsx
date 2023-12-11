import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  Col,
  Row,
  Button,
  CardHeader,
  Container,
} from "reactstrap";
import util from "../util";
import FindsTable from "../projects/find/findsTable";
import { useState, useEffect } from "react";

const ProfileCard = (props: any) => {
  // use state variables
  const [finds, setFinds] = useState();

  const user = util.getUser() as any;

  useEffect(() => {
    util.get("/find-me").then((result) => {
      setFinds(result?.data);
    });
  }, []);

  return (
    <Container>
      <Row>
        <Col xs="4">
          <Card>
            <CardHeader>
              <Row>
                <Col xs={3}>
                  <CardImg
                    alt="user profile image"
                    src="src/assets/meZeusandSkadi.jpg"
                    height="100%"
                    style={{
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
                    alignItems: "center",
                  }}
                >
                  <h2>{user?.forename + " " + user?.surname}</h2>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <CardTitle tag="h5">
                Name:
                {" " +
                  user?.forename +
                  " " +
                  user?.surname?.substring(0, 1) +
                  "."}
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Position: {" " + user?.position}
              </CardSubtitle>
              <CardText>
                {user?.education}
                consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec qu
              </CardText>
              <Button
                className="ss-info-btn"
                target="_blank"
                href="https://www.linkedin.com/"
              >
                LinkedIn
              </Button>
              <Button
                className="ss-info-btn"
                target="_blank"
                href="https://twitter.com/"
              >
                Twitter
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <div>
        <FindsTable finds={finds}></FindsTable>
      </div>
    </Container>
  );
};

export default ProfileCard;
