import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  CardGroup,
  CardImg,
  Row,
  Col,
} from "reactstrap";
import ToggleBtn from "./toggleBtn";

const cardData = [
  {
    title: "Trim Castle Excavation",
    imgSrc: "src/assets/IMAG0463.jpg",
    location: "Location: Trim Castle, Trim, Co. Meath",
    description: "DESCRIPTON",
  },
  {
    title: "something",
    imgSrc: "src/assets/IMAG0463.jpg",
    location: "Location: Trim Castle, Trim, Co. Meath",
    description: "DESCRIPTON",
  },
  {
    title: "something",
    imgSrc: "src/assets/IMAG0463.jpg",
    location: "Location: Trim Castle, Trim, Co. Meath",
    description: "DESCRIPTON",
  },
  {
    title: "something",
    imgSrc: "src/assets/IMAG0463.jpg",
    location: "Location: Trim Castle, Trim, Co. Meath",
    description: "DESCRIPTON",
  },
  {
    title: "something",
    imgSrc: "src/assets/IMAG0463.jpg",
    location: "Location: Trim Castle, Trim, Co. Meath",
    description: "DESCRIPTON",
  },
];

const Cardbox = () => {
  return (
    <Row>
      {cardData.map((card) => (
        <Col xs="4">
          <Card>
            <CardImg alt="Card image cap" src={card.imgSrc} top width="100%" />
            <CardBody>
              <CardTitle tag="h5">{card.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {card.location}
              </CardSubtitle>
              <CardText>{card.description}</CardText>
              <ToggleBtn />
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Cardbox;
