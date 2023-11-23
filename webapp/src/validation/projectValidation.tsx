import * as yup from "yup";

const projectSchema = yup.object().shape({
  name: yup.string().min(2).max(10).required(),
  siteID: yup.string().required(),
  projectLocation: yup.string().required(),
  director: yup.string().required(),
  startDate: yup.date().required(),
  description: yup.string().min(10).required(),
  contract: yup.string().required(),
  licenceNumber: yup.string().required(),
});
export default projectSchema;
