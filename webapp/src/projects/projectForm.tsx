import {
  Form,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
  FormProps,
} from "reactstrap";
import { lightColors, darkColors } from "react-floating-action-button";

const PjtAddForm = (props: any) => {
  const onSubmit = (e: Event): void => {
    e.preventDefault();
    props.onSubmit({});
  };
  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="name">Project Name</Label>
            <Input id="name" name="name" placeholder="Forename" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="mainImg">Primary Image</Label>
            <Input
              id="mainImg"
              name="mainImg"
              placeholder="src/assets/IMAG0463.jpg"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="location">Location</Label>
            <Input id="pjtLocation" name="pjtLocation" placeholder="Location" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="email">Site ID</Label>
            <Input
              id="email"
              name="email"
              placeholder="Site ID"
              type="number"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          id="description"
          name="description"
          placeholder="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pro"
        />
      </FormGroup>

      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="director">Primary Director Name</Label>
            <Input
              id="director"
              name="director"
              placeholder="Primary Director Name"
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="date">Start Date</Label>
            <Input id="date" name="date" placeholder="20/10/2023" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="contract">Contract Type</Label>
            <Input
              id="contract"
              name="contract"
              placeholder="Private / Public Contract"
            />
          </FormGroup>
        </Col>
      </Row>

      <Button
        type="submit"
        style={{
          backgroundColor: darkColors.cyan,
          color: lightColors.teal,
        }}
      >
        Submit{" "}
      </Button>

      <Button
        style={{
          backgroundColor: darkColors.cyan,
          color: lightColors.teal,
        }}
        onClick={props.toggle}
      >
        Cancel
      </Button>
    </Form>
  );
};

export default PjtAddForm;
