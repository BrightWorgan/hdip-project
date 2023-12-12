import { useEffect, useState } from "react";
import React from "react";
import util from "./util";
import Select from "./select";

const ProjectPicker = (props: any) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    util.get("/project").then((result) => {
      setProjects(result?.data);
    });
  }, []);
  const projectIDs = projects.map((project: any) => project.projectID);
  if (projectIDs.length === 0) {
    return null;
  }
  return (
    <Select
      label="Project"
      disabled={props.disabled}
      options={projectIDs}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default ProjectPicker;
