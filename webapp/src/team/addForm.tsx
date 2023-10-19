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

const AddForm = (props) => {
  const onSubmit = (e: Event): void => {
    e.preventDefault();
    const user = {
      name: e?.target?.name?.value,
      surname: e?.target?.surname?.value,
      number: e?.target?.number?.value,
      email: e?.target?.email?.value,
      address: e?.target?.address?.value,
      townCity: e?.target?.townCity?.value,
      county: e?.target?.county?.value,
      eircode: e?.target?.eircode?.value,
      experience: e?.target?.experience?.value,
      education: e?.target?.education?.value,
      training: e?.target?.training?.value,
      drive: e?.target?.drive?.value,
    };
    props.onSubmit(user);
  };
  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="name">Forename</Label>
            <Input id="name" name="name" placeholder="Forename" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="surname">Surname</Label>
            <Input id="surname" name="surname" placeholder="Surname" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="number">Contact Number</Label>
            <Input id="number" name="number" placeholder="+353 80 000 00 00" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="email">Email Addresss</Label>
            <Input
              id="email"
              name="email"
              placeholder="Email Addresss"
              type="email"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="address">Primary Address Line 1</Label>
        <Input
          id="address"
          name="address"
          placeholder="Apt 23, The Farmhouse"
        />
      </FormGroup>
      {/* <FormGroup>
      <Label for="addressL2">Primary Address Line 2</Label>
      <Input
        id="addressL2"
        name="addressL2"
        placeholder="St. Stephen's Green, Dublin"
      />
    </FormGroup> */}
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="townCity">Town/City</Label>
            <Input id="townCity" name="towncity" placeholder="Clontarf" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="county">County</Label>
            <Input id="county" name="county" placeholder="Dublin" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="eircode">Eircode</Label>
            <Input id="eircode" name="eircode" placeholder="W91VA07" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="education">Education</Label>
            <Input id="education" name="education" placeholder="Level 8" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="experience">Experience</Label>
            <Input
              id="experience"
              name="experience"
              placeholder="Site Assistant"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="training">Training </Label>
            <Input
              id="training"
              name="Training"
              placeholder="Safe Pass, Manual Handling, Etc."
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="drive">Driving</Label>
            <Input id="drive" name="drive" placeholder="Can Drive ? Yes/No" />
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
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="Training">Training </Label>
            <Input
              id="Training"
              name="Training"
              placeholder="Safe Pass, Manual Handling, Etc."
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="drive">Driving</Label>
            <Input id="drive" name="drive" placeholder="Can Drive ?" />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default AddForm;
