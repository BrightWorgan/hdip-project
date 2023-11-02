import { Container } from "reactstrap";

const ReportHeader = (props: any) => {
  return (
    <div>
      <div>
        <Container>
          {/* <h3>____ Register: </h3> */}
          <h3>Reports:</h3>
          <h4>Project Name: {props.project.title}</h4>
          {/* <h6>Project Name: {props.project.title} </h6> */}
          <h6>Project ID: {props.project.siteID}</h6>
          <h6>Site Name: {props.project.title} </h6>
          <h6>Licence Number:{props.project.licenceNumber}</h6>
          <h6>Area: {props.project.location} </h6>
          {/* <h2>testing</h2> */}
        </Container>
      </div>
    </div>
  );
};
export default ReportHeader;
