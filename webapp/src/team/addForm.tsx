import { Button, Form, Col, Row, FormGroup, Label, Input } from "reactstrap";

const addForm = () => {
  return (
    <Form>
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
        <Col md={4}>
          <FormGroup>
            <Label for="county">County</Label>
            <Input id="county" name="county" placeholder="Dublin" />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="eircode">Eircode</Label>
            <Input id="eircode" name="eircode" placeholder="W91VA07" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="Education">Education</Label>
            <Input id="Education" name="Education" placeholder="Level 8" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="Experience">Experience</Label>
            <Input
              id="Experience"
              name="Experience"
              placeholder="Site Assistant"
            />
          </FormGroup>
        </Col>
      </Row>
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

export default addForm;
