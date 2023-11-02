import ContextTable from "./cutFillTable";

import ReportHeader from "./reportHeader";

import { Container } from "reactstrap";

const ContextRegister = () => {
  return (
    <div>
      <br></br>
      {/* <h1>Reports page is working</h1> */}
      <div>
        <Container>
          <ReportHeader />
          <ContextTable />
        </Container>
      </div>
    </div>
  );
};
export default ContextRegister;
