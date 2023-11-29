import { Container, Form, FormGroup, Row, Col, Label, Input } from "reactstrap";
import { useState } from "react";
import findRegisterSchema from "../../validation/findRegisterValidation";

const FindsForm = (props: any) => {
  // use state variable
  const [error, setError] = useState("");

  const onSubmit = async (e: Event): Promise<void> => {
    e.preventDefault();
    const find = {
      contextNumber: e?.target?.contextNumber?.value,
      fillNumber: e?.target?.fillNumber?.value,
      description: e?.target?.description?.value,
      material: e?.target?.material?.value,
      photograph: e?.target?.photograph?.value,
      date: e?.target?.date?.value,
      bagged: e?.target?.bagged?.value,
    };

    // validation
    try {
      const validatedFind = await findRegisterSchema.validate(find);
      setError("");
      props.onSubmit(validatedFind);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Container>
        <Form onSubmit={onSubmit}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="contextNumber">Context Number</Label>
                <Input
                  id="contextNumber"
                  name="contextNumber"
                  placeholder="Context Number (Cut #)"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="fillNumber">Fill Number</Label>
                <Input
                  id="fillNumber"
                  name="fillNumber"
                  placeholder="Fill Number (Fill #)"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
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
            <Col md={6}>
              <FormGroup>
                <Label for="material">Material</Label>
                <Input id="material" name="material" placeholder="material" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <FormGroup>
              <Label for="photograph">Photograph</Label>
              <Input id="photograph" name="photograph" placeholder="Yes / No" />
            </FormGroup>
            <FormGroup>
              <Label for="bagged">Bagged</Label>
              <Input id="bagged" name="bagged" placeholder="Yes / No" />
            </FormGroup>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default FindsForm;
