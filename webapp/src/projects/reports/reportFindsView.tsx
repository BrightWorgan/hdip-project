import ReportHeader from "./reportHeader";
import FindsTable from "./findsTable";
import { Container } from "reactstrap";

const ReportsFind = (props: any) => {
  return (
    <div>
      <br></br>
      {/* <h1>Reports page is working</h1> */}
      <div>
        <Container>
          <ReportHeader project={project} />
          <FindsTable />
          {/* {props.project.title} */}
        </Container>
      </div>
    </div>
  );
};
export default ReportsFind;
