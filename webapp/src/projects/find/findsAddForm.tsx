import { Container, Form, FormGroup, Row, Col, Label, Input } from "reactstrap";
import { useState } from "react";
import findRegisterSchema from "../../validation/findRegisterValidation";
import util from "../../util";
import YesNoOption from "../../common/dropdowns/yesNoOption";
import ContextDropdown from "../../common/dropdowns/contextDropdown";
import MaterialDropdown from "../../common/dropdowns/materialDropdown";
import FormButton from "../../common/formSubmitButtons";

const FindsForm = (props: any) => {
  // use state variable
  const [error, setError] = useState("");

  const onSubmit = async (e: Event): Promise<void> => {
    e.preventDefault();

    const user = util.getUser();

    const find = {
      contextNumber: e?.target?.contextNumber?.value,
      fillNumber: e?.target?.fillNumber?.value,
      description: e?.target?.description?.value,
      material: e?.target?.material?.value,
      photograph: e?.target?.photograph?.value,
      bagged: e?.target?.bagged?.value,
      date: e?.target?.date?.value,
      userID: user?.userID,
    };

    // validation
    try {
      const validatedFind = await findRegisterSchema.validate(find);
      setError("");
      console.log(validatedFind);
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
                <ContextDropdown
                  placeholder="Context Number (Cut #)"
                  id="contextNumber"
                  projectID={props.project.projectID}
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
                <MaterialDropdown placeholder="material" id="material" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="photograph">Photograph</Label>
                <YesNoOption id="photograph" placeholder="Yes / No" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="bagged">Bagged</Label>
                <YesNoOption id="bagged" placeholder="Yes / No" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  placeholder="20/10/2023"
                />
              </FormGroup>
            </Col>
            {/* error message */}
            <p className="ss-errror-message"> {error} </p>
          </Row>
          <Row>
            <Col xs={{ size: 6, offset: 6 }}>
              <FormButton toggle={props.toggle} />
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default FindsForm;
