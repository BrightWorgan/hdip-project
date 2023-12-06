import * as yup from "yup";

const contextRegisterSchema = yup.object().shape({
  // context number assigned in db
  type: yup.string().min(2).required(),
  description: yup.string().min(2).max(100).required(),
  soilType: yup.string().min(2).required(),
  samples: yup.string().min(2).required(),
  location: yup.string().min(2).max(100).required(),
  date: yup.date().required(),
  // foundby taken via token
});

export default contextRegisterSchema;
