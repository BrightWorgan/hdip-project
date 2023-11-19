import * as yup from "yup";

const teamSchema = yup.object().shape({
  name: yup.string().min(2).max(10).required(),
  surname: yup.string().min(2).max(10).required(),
  number: yup.string().min(10).required(),
  email: yup.string().email().lowercase().required(),
  address: yup.string().min(2).max(10).required(),
  townCity: yup.string().min(10).required(),
  county: yup.string().required().typeError("Test Message"),
  eircode: yup.string().min(2).max(10).required(),
  //   experience: yup.string().min(10).required(),
  //   education: yup.string().email().required(),
  //   training: yup.string().min(10).required(),
  //   drive: yup.enmum().email().required(), ????
});
export default teamSchema;
