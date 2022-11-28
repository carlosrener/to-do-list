import Task from "../models/Task.js";

export const controllerGetAllTask = async (req, res) => {
  try {
    const taskList = await Task.find();
    return res.render("index", { taskList, task: null, taskDelete: null });
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

export const controllerGetByIdTask = async (req, res) => {
  try {
    const taskList = await Task.find();

    if (req.params.method == "update") {
      const task = await Task.findOne({ _id: req.params.id });
      res.render("index.ejs", { task, taskDelete: null, taskList });
    } else {
      const taskDelete = await Task.findOne({ _id: req.params.id });
      res.render("index.ejs", { task: null, taskDelete, taskList });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const controllerUpdateTask = async (req, res) => {
  try {
    const task = req.body;
    await Task.updateOne({ _id: req.params.id }, task);
    res.redirect("/");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const controllerDeleteTask = async (req, res) => {
  const id = req.params.id;

  try {
    await Task.deleteOne({ _id: id });
    res.redirect("/");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
