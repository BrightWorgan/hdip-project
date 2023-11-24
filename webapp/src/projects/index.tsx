import { useEffect, useState } from "react";
import FAB from "../common/fab";
import ModalBackdrop from "../common/modalBackdrop";
import Cardbox from "./projectCards";
import ProjectAddForm from "./projectForm";
import Sheets from "./reports/sheets";
import util from "../util";
import toast from "react-hot-toast";

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedProjects, setSelectedProjects] = useState<any[]>([]);

  const toggle = () => setIsOpen(!isOpen);

  const onToggle = () => {
    toggle();
  };

  const onAdd = async (project: any) => {
    // send to backend
    await util.post("/project", project);
    toggle();
  };

  // state variables
  const [project, setProject] = useState(null);

  const [allProjects, setAllProjects] = useState<any[]>([]);

  // edit mode
  const [editMode, setEditMode] = useState(false);

  const onSelect = (project: any) => {
    setProject(project);
  };

  // checking a checkbox logic
  const onChecked = (project: any) => {
    const existingProjectIndex = selectedProjects.findIndex(
      (aSelectedProject) => aSelectedProject.projectID === project.projectID
    );

    if (existingProjectIndex === -1) {
      const newSelectedProjects = selectedProjects.concat([project]);
      setSelectedProjects(newSelectedProjects);
    } else {
      const newSelectedProjects = selectedProjects.filter(
        (_item, index) => index !== existingProjectIndex
      );
      setSelectedProjects(newSelectedProjects);
    }
  };

  // toggle edit mode
  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  // remove logic with edit mode
  const onRemove = () => {
    if (editMode) {
      // remove things
      toast("Select mode disabled");
      toggleEdit();
    } else {
      toast("Select mode enabled");
      toggleEdit();
    }
  };

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
        <Cardbox
          cardData={allProjects}
          onSelect={onSelect}
          editMode={editMode}
          selectedProjects={selectedProjects}
          onChecked={onChecked}
        />
        <FAB name="Project" onAdd={onToggle} onRemove={() => onRemove()} />
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
