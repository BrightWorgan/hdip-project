import { Container } from "reactstrap";

const ReportHeader = (props: any) => {
  return (
    <div>
      <div>
        <Container>
          <h4>Project Name: {props.project.title}</h4>
          <h6>Project ID: {props.project.siteID}</h6>
          <h6>Licence Number:{props.project.licenceNumber}</h6>
        </Container>
      </div>
    </div>
  );
};
export default ReportHeader;
