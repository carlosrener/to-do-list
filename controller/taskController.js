import Task from "../models/Task.js";

export const controllerGetAllTask = async (req, res) => {
  try {
    const taskList = await Task.find();
    return res.render("index", {taskList});
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const controllerCreateTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    return res.redirect("/");
  }

  try {

    await Task.create(task);
    return res.redirect("/");

  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
