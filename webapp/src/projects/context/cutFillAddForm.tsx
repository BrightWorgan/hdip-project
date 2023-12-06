import { Form, FormGroup, Row, Col, Label, Input } from "reactstrap";
import { useState } from "react";
import contextRegisterSchema from "../../validation/contextRegisterValidation";
import util from "../../util";
import YesNoOption from "../../common/dropdowns/yesNoOption";
import CutFillOption from "../../common/dropdowns/cutFillDropdown";
import FormButton from "../../common/formSubmitButtons";

const ContextForm = (props: any) => {
  // use state variable
  const [error, setError] = useState("");

  const onSubmit = async (e: Event): Promise<void> => {
    e.preventDefault();

    const user = util.getUser();

    const context = {
      type: e?.target?.type?.value,
      description: e?.target?.description?.value,
      soilType: e?.target?.soilType?.value,
      samples: e?.target?.samples?.value,
      location: e?.target?.location?.value,
      date: e?.target?.date?.value,
      userID: user?.userID,
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
            <CutFillOption id="type" placeholder="Cut or Fill?" />
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
          <YesNoOption id="samples" placeholder="Yes / No" />
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
          <FormButton />
        </Col>
      </Row>
    </Form>
  );
};

export default ContextForm;
