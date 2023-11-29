import ReportHeader from "./reportHeader";
import AllReportCards from "./allCards";
import ContextRegister from "./contextRegisterPage";
import { Button, Container } from "reactstrap";
import { useState } from "react";
import Views from "./views.enum";
import FindsTable from "./findsTable";

const Sheets = (props: any) => {
  // use state
  const [view, setView] = useState(Views.default);

  let CurrentView = AllReportCards;

  if (view === Views.default) {
    CurrentView = AllReportCards;
  }
  if (view === Views.context) {
    CurrentView = ContextRegister;
  }

  if (view === Views.finds) {
    CurrentView = FindsTable;
  }

  if (view === Views.finds) {
    CurrentView = FindsTable;
  }

  return (
    <div>
      <br />
      {/* <h1>Reports page is working</h1> */}
      <div>
        <Container>
          {view !== Views.default ? (
            <div>
              <Button
                className="ss-back-btn"
                onClick={() => setView(Views.default)}
              >
                &#60; Back
              </Button>
              <br />
            </div>
          ) : null}
          <br />
          <ReportHeader project={props.project} />
          <br />
          <CurrentView onViewChange={setView} project={props.project} />
        </Container>
      </div>
    </div>
  );
};
export default Sheets;
