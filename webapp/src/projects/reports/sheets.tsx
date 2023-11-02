import ReportHeader from "./reportHeader";
import AllReportCards from "./allCards";

import { Container } from "reactstrap";

const Sheets = (props: any) => {
  return (
    <div>
      <br></br>
      {/* <h1>Reports page is working</h1> */}
      <div>
        <Container>
          <ReportHeader project={props.project} />
          <br />
          <AllReportCards />
        </Container>
      </div>
    </div>
  );
};
export default Sheets;
