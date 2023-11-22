import { useEffect, useState } from "react";
import FAB from "../common/fab";
import ModalBackdrop from "../common/modalBackdrop";
import Cardbox from "./projectCards";
import ProjectAddForm from "./projectForm";
import Sheets from "./reports/sheets";
import util from "../util";

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const onToggle = () => {
    toggle();
  };

  const onAdd = async (project: any) => {
    // send to backend
    await util.post("/project", project);
    toggle();
  };

  // state variable
  const [project, setProject] = useState(null);
  const onSelect = (project: any) => {
    setProject(project);
  };

  const [allProjects, setAllProjects] = useState<any[]>([]);

  useEffect(() => {
    util.get("/project").then(async (result) => {
      setAllProjects(result?.data);
    });
  }, [isOpen]);

  // logic to display either the view of all Project cards OR the Reports page, i.e. "Sheets" for a selected Project
  if (project === null) {
    return (
      <div>
        <br></br>
        <Cardbox cardData={allProjects} onSelect={onSelect} />
        <FAB name="Project" onAdd={onToggle} />
        <ModalBackdrop
          header="Add a new Project"
          toggle={onToggle}
          isOpen={isOpen}
          onAdd={onAdd}
        >
          <ProjectAddForm onSubmit={onAdd} toggle={onToggle} />
        </ModalBackdrop>
      </div>
    );
  } else {
    return <Sheets project={project} />;
  }
};
export default Project;
