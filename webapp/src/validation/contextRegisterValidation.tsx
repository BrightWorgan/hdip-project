import * as yup from "yup";

const contextRegisterSchema = yup.object().shape({
  type: yup.string().min(2).max(10).required(),
  description: yup.string().min(2).max(100).required(),
  soilType: yup.string().min(2).required(),
  samples: yup.string().min(2).max(100).required(),
  location: yup.string().min(10).max(100).required(),
  date: yup.date().required(),
});

export default contextRegisterSchema;
