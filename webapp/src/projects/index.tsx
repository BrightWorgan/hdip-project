import { useState } from "react";
import FAB from "../common/fab";
import ModalBackdrop from "../common/modalBackdrop";
import Cardbox from "./projectCards";
import ProjectAddForm from "./projectForm";
import Sheets from "./reports/sheets";

const cardData = [
  {
    projectID: "0000001",
    title: "Trim Castle Field School",
    imgSrc: "src/assets/IMAG0463.jpg",
    location: "Location: Trim Castle, Trim, Co. Meath",
    siteID: "Site ID: 2023000000021",
    siteName: "Trim Castle Area 1",
    licenceNumber: "202300020009",
    director: "Sean Shannanan",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    contractType: "Field School",
    startDate: "10/October/2023",
  },
  {
    projectID: "0000002",
    title: "Kylemore Abbey  Capel L-Dar Preparation",
    imgSrc: "src/assets/IMAG1100-EFFECTS.jpg",
    location: "Location: Kylemore Abbey, Co. Galway",
    siteID: "Site ID: 2023000000022",
    siteName: "",
    licenceNumber: "",
    director: "Derric Mountain",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    contractType: "Count Council",
  },
  {
    projectID: "0000003",
    title: "Trim Castle Field School Winter Grads",
    imgSrc: "src/assets/trimCastleSideImage.jpg",
    location: "Location: Trim Castle, Trim, Co. Meath",
    siteID: "Site ID: 2023000000023",
    siteName: "Trim Castle",
    licenceNumber: "202300020009",
    director: "Sean Shannanan",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    contractType: "Field School",
    startDate: "10/October/2023",
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

  // state variable
  const [project, setProject] = useState(null);

  const onSelect = (project: any) => {
    setProject(project);
  };

  // logic to display either the view of all Project cards OR the Reports for a selected Project
  if (project === null) {
    return (
      <div>
        <br></br>
        <Cardbox cardData={cardData} onSelect={onSelect} />
        <FAB name="Project" onAdd={onToggle} />
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
  } else {
    return <Sheets project={project} />;
  }
};
export default Project;
