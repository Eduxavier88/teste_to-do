const mongoose = require("mongoose");

// Define o esquema da coleção de tarefas
const taskSchema = new mongoose.Schema({
  /**
   * Título da tarefa.
   * @type {String}
   * @required
   */
  title: { type: String, required: true },

  /**
   * Descrição opcional da tarefa.
   * @type {String}
   */
  description: String,

  /**
   * Indica se a tarefa está completada ou não.
   * @type {Boolean}
   * @default false
   */
  completed: { type: Boolean, default: false },

  /**
   * Data de criação da tarefa.
   * @type {Date}
   * @default Date.now
   */
  createdAt: { type: Date, default: Date.now },
});

// Exporta o modelo Task baseado no esquema taskSchema
module.exports = mongoose.model("Task", taskSchema);
