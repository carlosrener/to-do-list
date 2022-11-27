import express from "express";
import {
  controllerGetAllTask,
  controllerCreateTask,
} from "../controller/taskController.js";

const routes = express.Router();

routes.get("/", controllerGetAllTask);
routes.post("/create",controllerCreateTask);

export default routes;
