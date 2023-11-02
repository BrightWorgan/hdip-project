import FindsTable from "./findsTable";
// import ContextTable from "./cutFillTable";
// import FindReportCard from "./findsCard";
// import CutAndFillReportCard from "./findsCard";
// import AllReportCards from "./allCards";
import ReportHeader from "./reportHeader";

import {
  Container,
  //   Col,
  //   Row,
  //   Input,
  //   Button,
  //   FormProps,
  //   ButtonGroup,
} from "reactstrap";

const Reports = (props: any) => {
  return (
    <div>
      <br></br>
      {/* <h1>Reports page is working</h1> */}
      <div>
        <Container>
          <ReportHeader />
          {/* <ContextTable /> */}
          {/* <FindReportCard /> */}
          {/* <CutAndFillReportCard /> */}
          <FindsTable />
          {/* <AllReportCards /> */}
          {props.project.title}
        </Container>
      </div>
    </div>
  );
};
export default Reports;
