import {
  Form,
  Col,
  Row,
  FormGroup,
  FormFeedback,
  FormText,
  Label,
  Input,
  Button,
  FormProps,
  ButtonGroup,
} from "reactstrap";

const AddForm = (props) => {
  const onSubmit = (e: Event): void => {
    e.preventDefault();
    const user = {
      name: e?.target?.name?.value,
      // surname: e?.target?.surname?.value,
      // number: e?.target?.number?.value,
      email: e?.target?.email?.value,
      // address: e?.target?.address?.value,
      // townCity: e?.target?.townCity?.value,
      // county: e?.target?.county?.value,
      // eircode: e?.target?.eircode?.value,
      // experience: e?.target?.experience?.value,
      // education: e?.target?.education?.value,
      // training: e?.target?.training?.value,
      // drive: e?.target?.drive?.value,
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
            <Input
              id="education"
              name="education"
              placeholder="Level 8"
              type="select"
            >
              <option>Leaving Cert</option>
              <option>Level 5</option>
              <option>Level 6</option>
              <option>Level 7</option>
              <option>Level 8</option>
              <option>Masters / Level 9</option>
              <option>PHD / Level 10</option>
              <option>Student</option>
              <option>Other</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="experience">Experience</Label>
            <Input
              id="experience"
              name="experience"
              placeholder="Site Assistant etc."
              type="select"
            >
              <option>General Operative</option>
              <option>Site Assisatant</option>
              <option>Supervisor</option>
              <option>Director</option>
              <option>Student</option>
              <option>Other</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="certs">Training </Label>
            <Input
              id="certs"
              name="Training"
              type="select"
              placeholder="Safe Pass, Manual Handling, Etc."
            >
              <option>Safe Pass</option>
              <option>Manual Handling</option>
              <option>Safe Pass and Manual Handling</option>
              <option>First Aid</option>
              <option>Safe Pass, Manual Handling and First Aid</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="drive">Driving</Label>
            <Input
              id="drive"
              name="drive"
              placeholder="Can Drive ? Yes/No"
              type="select"
            >
              <option>Yes</option>
              <option>No </option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="site">Current Site / None / etc.</Label>
            <Input id="site" name="site" placeholder="Current Site" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="position">Position </Label>
            <Input
              id="position"
              name="position"
              type="select"
              placeholder="Site Assisatant, Etc."
            >
              <option>General Operative</option>
              <option>Site Assisatant</option>
              <option>Supervisor</option>
              <option>Director</option>
              <option>Student</option>
              <option>Other</option>
            </Input>
          </FormGroup>
          {/* <FormGroup>
            <Label for="examplePassword">Invalid input</Label>
            <Input invalid />
            <FormFeedback>Oh noes! that name is already taken</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup> */}
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 6, offset: 6 }}>
          <ButtonGroup style={{ float: "right" }}>
            <Button color="danger" type="reset" onClick={() => props.toggle()}>
              Cancel
            </Button>
            <Button color="success" type="submit">
              Submit
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default AddForm;
