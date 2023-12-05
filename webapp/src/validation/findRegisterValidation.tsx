import * as yup from "yup";

const findRegisterSchema = yup.object().shape({
  // find number assigned in db
  contextNumber: yup.string().required(),
  fillNumber: yup.string().required(),
  description: yup.string().min(2).max(100).required(),
  material: yup.string().min(2).required(),
  photograph: yup.string().min(2).required(),
  bagged: yup.string().min(2).required(),
  date: yup.date(),
  // foundby taken via token
});

export default findRegisterSchema;
