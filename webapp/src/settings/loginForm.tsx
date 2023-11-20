import {
  Card,
  CardBody,
  Input,
  Button,
  CardFooter,
  CardTitle,
  Form,
} from "reactstrap";

import { useState } from "react";
import loginSchema from "../validation/loginValidation";

const LoginForm = (props: any) => {
  const [error, setError] = useState("");

  const onLogin = async (e: Event): void => {
    e.preventDefault();
    const user = {
      email: e?.target?.email?.value,
      password: e?.target?.password?.value,
    };

    // validation
    try {
      const validatedUser = await loginSchema.validate(user);
      setError("");
      props.onLogin(validatedUser);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="ss-login-div">
      <Form onSubmit={onLogin}>
        <Card
          className="ss-login-card"
          style={{
            width: "30%",
          }}
        >
          <CardBody>
            <CardTitle className="ss-login-card-title">Login</CardTitle>
            Email
            <Input
              id="email"
              name="email"
              placeholder="Email Addresss"
              type="email"
            ></Input>
            Password
            <Input
              id="password"
              name="password"
              placeholder="Password..."
              type="password"
            ></Input>
          </CardBody>
          <CardFooter>
            <Button
              className="ss-login-btn"
              type="submit"
              // onClick={(e) => onLogin(e)}
            >
              Login
            </Button>
          </CardFooter>
        </Card>
      </Form>
    </div>
  );
};
export default LoginForm;
