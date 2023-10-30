// import FindsTable from "./findsTable";
// import ContextTable from "./cutFillTable";
// import FindReportCard from "./findsCard";
// import CutAndFillReportCard from "./findsCard";
import AllReportCards from "./allCards";

import {
  Container,
  //   Col,
  //   Row,
  //   Input,
  //   Button,
  //   FormProps,
  //   ButtonGroup,
} from "reactstrap";

const Reports = () => {
  return (
    <div>
      <br></br>
      {/* <h1>Reports page is working</h1> */}
      <div>
        <Container>
          {/* <ContextTable /> */}
          {/* <FindReportCard /> */}
          {/* <CutAndFillReportCard /> */}
          {/* <FindsTable /> */}
          <AllReportCards />
        </Container>
      </div>
    </div>
  );
};
export default Reports;
