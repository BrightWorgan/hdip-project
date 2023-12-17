import { type Express } from "express";
import findController from "../controllers/finds.controller";

const findRoute = (app: Express) => {
  app.get("/find/:projectID", findController.getAll);
  app.get("/find-me", findController.getAllPerUser);
  app.get("/find/photo/:findNumber", findController.getAllImages);
  app.post("/find/:projectID", findController.create);
  app.post("/find-photo", findController.photo);
  app.patch("/find/:findNumber", findController.update);
  app.delete("/find/:projectID/:contextID", findController.destroy);
};
export default findRoute;
