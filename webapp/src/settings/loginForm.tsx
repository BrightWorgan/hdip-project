import {
  Card,
  CardBody,
  Input,
  Button,
  CardFooter,
  CardText,
  CardTitle,
} from "reactstrap";

const LoginForm = (props) => {
  return (
    <div className="ss-login-div">
      <Card
        className="ss-login-card"
        style={{
          width: "30%",
        }}
      >
        <CardBody>
          <CardTitle className="ss-login-card-title">Login</CardTitle>
          <CardText>
            Email
            <Input
              id="email"
              name="email"
              placeholder="Email Addresss"
              type="email"
            ></Input>
          </CardText>

          <CardText>
            Password
            <Input
              id="password"
              name="password"
              placeholder="Password..."
              type="password"
            ></Input>
          </CardText>
        </CardBody>
        <CardFooter>
          <Button
            className="ss-login-btn"
            type="submit"
            onClick={() => props.onLogin()}
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default LoginForm;
