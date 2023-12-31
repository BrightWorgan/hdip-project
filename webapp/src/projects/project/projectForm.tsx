import { Form, Col, Row, FormGroup, Label, Input } from "reactstrap";
import projectSchema from "../../validation/projectValidation";
import { useState } from "react";
import ContractTypeOption from "../../common/dropdowns/contractType";
import FormButton from "../../common/formSubmitButtons";

const ProjectAddForm = (props: any) => {
  //use state variable
  const [error, setError] = useState("");

  const onSubmit = async (e: Event): Promise<void> => {
    e.preventDefault();
    const project = {
      name: e?.target?.name?.value,
      projectLocation: e?.target?.projectLocation?.value,
      director: e?.target?.director?.value,
      startDate: new Date(e?.target?.startDate?.value),
      description: e?.target?.description?.value,
      contract: e?.target?.contract?.value,
      licenceNumber: e?.target?.licenceNumber?.value,
    };

    // validation
    try {
      const validatedProject = await projectSchema.validate(project);
      setError("");
      props.onSubmit(validatedProject);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col md={12}>
          <FormGroup>
            <Label for="name">Project Name</Label>
            <Input id="name" name="name" placeholder="Project Name" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="projectLocation">Location</Label>
            <Input
              id="projectLocation"
              name="pjtLocation"
              placeholder="Location"
            />
          </FormGroup>
        </Col>
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
      </Row>

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
        <Col md={6}>
          <FormGroup>
            <Label for="contract">Contract Type</Label>
            <ContractTypeOption
              id="contract"
              placeholder="Public Contract etc."
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="licenceNumber">licence #:</Label>
            <Input
              id="licenceNumber"
              name="licenceNumber"
              placeholder="licenceNumber"
            />
          </FormGroup>
        </Col>
        <FormGroup>
          <Col md={12}>
            <Label for="description">Description</Label>
            <Input
              id="description"
              name="description"
              placeholder="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pro"
            />
          </Col>
          {/* error message */}
          <p className="ss-errror-message"> {error} </p>
        </FormGroup>
      </Row>
      <Row>
        <Col xs={{ size: 6, offset: 6 }}>
          <FormButton toggle={props.toggle} />
        </Col>
      </Row>
    </Form>
  );
};

export default ProjectAddForm;
