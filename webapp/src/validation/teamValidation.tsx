import * as yup from "yup";

const teamSchema = yup.object().shape({
  name: yup.string().min(2).max(20).required(),
  surname: yup.string().min(2).max(20).required(),
  number: yup.string().min(10).required(),
  email: yup.string().email().lowercase().required(),
  address: yup.string().min(2).max(100).required(),
  townCity: yup.string().min(2).required(),
  county: yup.string().required(),
  eircode: yup.string().min(2).max(100).required(),
  //   experience: yup.string().min(10).required(),
  //   education: yup.string().email().required(),
  //   training: yup.string().min(10).required(),
  //   drive: yup.enmum().email().required(), ????
  password: yup.string(),
});
export default teamSchema;
