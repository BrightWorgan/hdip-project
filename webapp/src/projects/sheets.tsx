import ReportHeader from "../common/reportHeader";
import AllReportCards from "./project/allCards";
import ContextRegister from "./context/contextRegisterPage";
import { Button, Container } from "reactstrap";
import { useState } from "react";
import Views from "./views.enum";
import FindRegister from "./find/findRegisterPage";
import ComingSoon from "../common/comingSoon";

const Sheets = (props: any) => {
  // use state variable
  const [view, setView] = useState(Views.default);

  // logic to display correct view
  let CurrentView = AllReportCards;

  if (view === Views.default) {
    CurrentView = AllReportCards;
  }

  if (view === Views.context) {
    CurrentView = ContextRegister;
  }

  if (view === Views.finds) {
    CurrentView = FindRegister;
  }

  if (view === Views.samples) {
    CurrentView = ComingSoon;
  }

  return (
    <div>
      <br />
      <div>
        <Container fluid>
          <div>
            <p>
              <a href="#" onClick={() => props.onBack()}>
                Projects
              </a>{" "}
              {view !== Views.default ? (
                <>
                  &#62;
                  <a href="#" onClick={() => setView(Views.default)}>
                    &#32; Sheets
                  </a>
                </>
              ) : null}
            </p>
            <br />
          </div>
          <ReportHeader project={props.project} />
          <CurrentView onViewChange={setView} project={props.project} />
        </Container>
      </div>
    </div>
  );
};
export default Sheets;
