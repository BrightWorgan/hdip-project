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
  Container,
  ButtonGroup,
} from "reactstrap";
import ModalBackdrop from "../../common/modalBackdrop";
import { useState } from "react";
import toast from "react-hot-toast";
import AssignmentDisplay from "./assignDisplay";

const Cardbox = (props: any) => {
  // state variables
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const onToggle = () => {
    toggle();
  };

  const assignUsers = async (users: any) => {
    // TO DO
    toggle();
    toast("Team Member(s) Assigned");
  };

  const onCardClick = (project: any) => {
    if (props.editMode) {
      props.onChecked(project);
    }
  };
  return (
    <Container>
      <Row>
        {props.cardData.map((project: any) => (
          <Col xs="4">
            <Card
              onClick={() => onCardClick(project)}
              style={{
                cursor: props.editMode ? "pointer" : "default",
                opacity:
                  props.editMode &&
                  props.selectedProjects.some(
                    (p: any) => p.projectID === project.projectID
                  )
                    ? "0.5"
                    : "1",
                borderColor:
                  props.editMode &&
                  props.selectedProjects.some(
                    (p: any) => p.projectID === project.projectID
                  )
                    ? "#73a2d1"
                    : "inherit",
              }}
            >
              <br />
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
                <ButtonGroup>
                  <Button
                    className="ss-info-btn"
                    onClick={() => props.onSelect(project)}
                  >
                    Project Details
                  </Button>
                  <Button className="ss-info-btn" onClick={() => onToggle()}>
                    Add Team Members
                  </Button>
                  <ModalBackdrop
                    header="Assign a Team Member to Project"
                    toggle={onToggle}
                    isOpen={isOpen}
                  >
                    <AssignmentDisplay
                      onSubmit={assignUsers}
                      toggle={onToggle}
                    />
                  </ModalBackdrop>
                </ButtonGroup>

                <br />
              </CardBody>
              <br />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cardbox;
