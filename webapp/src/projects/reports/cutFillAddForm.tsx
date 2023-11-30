import {
  Form,
  FormGroup,
  Row,
  Col,
  Label,
  Input,
  Button,
  ButtonGroup,
} from "reactstrap";
import { useState } from "react";
import contextRegisterSchema from "../../validation/contextRegisterValidation";

const ContextForm = (props: any) => {
  // use state variable
  const [error, setError] = useState("");

  const onSubmit = async (e: Event): Promise<void> => {
    e.preventDefault();
    const context = {
      type: e?.target?.type?.value,
      description: e?.target?.description?.value,
      soilType: e?.target?.soilType?.value,
      samples: e?.target?.samples?.value,
      location: e?.target?.location?.value,
      date: e?.target?.date?.value,
    };

    // validation
    try {
      const validatedContext = await contextRegisterSchema.validate(context);
      setError("");
      props.onSubmit(validatedContext);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
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
            <Input id="date" name="date" type="date" placeholder="27/11/2023" />
          </FormGroup>
          {/* error message */}
          <p className="ss-errror-message"> {error} </p>
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

export default ContextForm;
