import { Container, Form, FormGroup, Row, Col, Label, Input } from "reactstrap";

const ContextForm = () => {
  return (
    <div>
      <Container>
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="type">Cut or Fill</Label>
                <Input id="type" name="type" placeholder="Cut or Fill?" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="description"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <FormGroup>
              <Label for="soilType">Soil Type</Label>
              <Input
                id="exampleAddsoilTyperess"
                name="soilType"
                placeholder="Soil Type"
              />
            </FormGroup>
            <FormGroup>
              <Label for="samples">Samples</Label>
              <Input id="samples" name="samples" placeholder="Samples" />
            </FormGroup>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="location">Location</Label>
                <Input id="location" name="location" placeholder="location" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="date">Date</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  placeholder="27/11/2023"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default ContextForm;
