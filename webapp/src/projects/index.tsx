import { useEffect, useState } from "react";
import FAB from "../common/fab";
import ModalBackdrop from "../common/modalBackdrop";
import Cardbox from "./project/projectCards";
import ProjectAddForm from "./project/projectForm";
import Sheets from "./sheets";
import util from "../util";
import toast from "react-hot-toast";
import ShowDirector from "../common/showDirector";

const Project = () => {
  // state variables
  const [isOpen, setIsOpen] = useState(false);

  const [selectedProjects, setSelectedProjects] = useState<any[]>([]);

  const [project, setProject] = useState(null);

  const [allProjects, setAllProjects] = useState<any[]>([]);

  // edit mode
  const [editMode, setEditMode] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const onToggle = () => {
    toggle();
  };

  const onAdd = async (project: any) => {
    // send to backend
    await util.post("/project", project);
    toggle();
    toast("Project Added");
  };

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
  const onRemove = async () => {
    if (editMode) {
      // remove things
      console.log("Trying to remove projesct(s)");
      let idArray = [];
      for (let i = 0; i < selectedProjects.length; i += 1) {
        idArray.push(selectedProjects[i].projectID);
      }
      if (idArray.length !== 0) {
        await util.remove("/project", idArray);
        toast(`${idArray.length} project(s) removed`);
        setSelectedProjects([]);
      } else {
        toast("Select mode disabled");
      }
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
  }, [isOpen, editMode]);

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
        <ShowDirector>
          <FAB name="Project" onAdd={onToggle} onRemove={() => onRemove()} />
        </ShowDirector>
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
    return <Sheets project={project} onBack={() => setProject(null)} />;
  }
};
export default Project;
