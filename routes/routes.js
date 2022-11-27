import express from "express";
import { controllerGetAllTask } from "../controller/taskController.js"

const routes = express.Router();

routes.get("/", controllerGetAllTask);





export default routes;