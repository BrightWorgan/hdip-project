// import { useState } from "react";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
import teamSchema from "../validation/teamValidation";

import { useState } from "react";

import {
  Form,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
  ButtonGroup,
} from "reactstrap";

const AddForm = (props: any) => {
  const [error, setError] = useState("");
  const onSubmit = async (e: Event): void => {
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
      site: e?.target?.site?.value,
      password: e?.target.password.value,
    };

    // validation
    try {
      const validatedUser = await teamSchema.validate(user);
      setError("");
      props.onSubmit(validatedUser);
    } catch (error: any) {
      setError(error.message);
    }
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
            <Input
              id="number"
              name="number"
              placeholder="+353 80 000 00 00"
              required
            />
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
            {/* <select */}
            <Input
              id="certs"
              name="certs"
              type="select"
              multiple={true}
              placeholder="Safe Pass, Manual Handling, Etc."
            >
              <option>Safe Pass</option>
              <option>Manual Handling</option>
              <option>First Aid</option>
              <option>Other</option>
              <option>None</option>
              {/* </select> */}
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
        </Col>
      </Row>
      <Row>
        <Input
          id="password"
          name="password"
          placeholder="Temporary Password."
        ></Input>
        <p className="ss-errror-message"> {error} </p>
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
