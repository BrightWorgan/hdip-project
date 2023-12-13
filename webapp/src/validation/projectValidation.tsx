import * as yup from "yup";

const projectSchema = yup.object().shape({
  name: yup.string().min(2).max(100).required(),
  projectLocation: yup.string().min(2).required(),
  director: yup.string().min(2).required(),
  startDate: yup.date().required(),
  description: yup.string().min(10).max(100).required(),
  contract: yup.string().min(2).required(),
  licenceNumber: yup.string().min(2).required(),
});
export default projectSchema;
