import { useState } from "react";
import FAB from "../team/fab";
import TeamModal from "../team/modalBackdrop";
import Cardbox from "./carosal";
import ProjectForm from "./projectForm";

const cardData = [
  {
    title: "Trim Castle Excavation",
    imgSrc: "src/assets/IMAG0463.jpg",
    location: "Location: Trim Castle, Trim, Co. Meath",
    siteID: "Site ID: 2023000000021",
    description: "DESCRIPTON",
  },
  {
    title: "something",
    imgSrc: "src/assets/IMAG1100-EFFECTS.jpg",
    location: "Location: Kylemore Abbey, Co. Galway",
    siteID: "Site ID: 2023000000022",
    description: "DESCRIPTON",
  },
  {
    title: "something",
    imgSrc: "src/assets/IMAG0463.jpg",
    location: "Location: Trim Castle, Trim, Co. Meath",
    siteID: "Site ID: 2023000000023",
    description: "DESCRIPTON",
  },
];

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const onToggle = () => {
    toggle();
  };

  const onAdd = (project: any) => {
    toggle();
  };

  return (
    <div>
      {/* <h1>Project page is working</h1> */}
      <h2>Welcome to Sheet Scribe</h2>
      <h4>For all of your Traceable Heritage needs</h4>
      <br></br>
      <h2>Projects:</h2>
      <Cardbox cardData={cardData} />
      <FAB name="Project" onToggle={onToggle} />
      <TeamModal
        header="Add a new Team Member"
        toggle={onToggle}
        isOpen={isOpen}
        onAdd={onAdd}
      >
        <ProjectForm onSubmit={onAdd} />
      </TeamModal>
    </div>
  );
};
export default Project;
