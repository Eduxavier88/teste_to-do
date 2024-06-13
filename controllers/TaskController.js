const Task = require("../models/TaskModel");
const { addEventToCalendar } = require("../services/taskService");

/**
 * Cria uma nova tarefa e adiciona um evento ao Google Calendar.
 * @param {*} req - Objeto de requisição contendo os dados da tarefa.
 * @param {*} res - Objeto de resposta para enviar a resposta ao cliente.
 */
exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    await addEventToCalendar(task); // Adicionar evento ao Google Calendar
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Atualiza uma tarefa existente pelo ID.
 * @param {*} req - Objeto de requisição contendo o ID da tarefa a ser atualizada e os novos dados.
 * @param {*} res - Objeto de resposta para enviar a resposta ao cliente.
 */
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Deleta uma tarefa pelo ID.
 * @param {*} req - Objeto de requisição contendo o ID da tarefa a ser deletada.
 * @param {*} res - Objeto de resposta para enviar a resposta ao cliente.
 */
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Retorna todas as tarefas cadastradas.
 * @param {*} req - Objeto de requisição (não utilizado neste caso).
 * @param {*} res - Objeto de resposta para enviar a resposta ao cliente.
 */
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Marca uma tarefa como completa pelo ID.
 * @param {*} req - Objeto de requisição contendo o ID da tarefa a ser marcada como completa.
 * @param {*} res - Objeto de resposta para enviar a resposta ao cliente.
 */
exports.completeTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { completed: true },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
