import express from "express";
import {
  controllerGetAllTask,
  controllerCreateTask,
  controllerGetByIdTask,
  controllerUpdateTask,
  controllerDeleteTask
} from "../controller/taskController.js";

const routes = express.Router();

routes.get("/", controllerGetAllTask);
routes.post("/create",controllerCreateTask);
routes.get("/getbyid/:id/:method", controllerGetByIdTask);
routes.post("/updateone/:id", controllerUpdateTask);
routes.get("/deleteone/:id", controllerDeleteTask);

export default routes;
