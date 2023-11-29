import * as yup from "yup";

const findRegisterSchema = yup.object().shape({
  // find number assigned in db
  contextNumber: yup.string().min(2).max(100).required(),
  fillNumber: yup.string().min(2).required(),
  description: yup.string().min(2).max(100).required(),
  material: yup.string().min(2).required(),
  photograph: yup.string().min(2).max(100).required(),
  bagged: yup.string().min(10).max(100).required(),
  date: yup.date().required(),
  // foundby taken via token
});

export default findRegisterSchema;
