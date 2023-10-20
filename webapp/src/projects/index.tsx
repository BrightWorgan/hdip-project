import { useState } from "react";
import FAB from "../common/fab";
import ModalBackdrop from "../common/modalBackdrop";
import Cardbox from "./projectCards";
import ProjectAddForm from "./projectForm";

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
      <ModalBackdrop
        header="Add a new Project"
        toggle={onToggle}
        isOpen={isOpen}
        onAdd={onAdd}
      >
        <ProjectAddForm onSubmit={onAdd} />
      </ModalBackdrop>
    </div>
  );
};
export default Project;
