const express = require('express');
const router = express.Router();
const taskController = require('../controllers/TaskController');

/**
 * Rota POST para criar uma nova tarefa.
 * @name POST /tasks/createTask
 * @function
 * @memberof module:routes/TasksRoute
 * @inner
 * @param {string} path - Endpoint da rota ('/createTask').
 * @param {callback} middleware - Função de controle definida em taskController.createTask.
 */
router.post('/createTask', taskController.createTask);

/**
 * Rota PUT para atualizar uma tarefa existente pelo ID.
 * @name PUT /tasks/:id/updateTask
 * @function
 * @memberof module:routes/TasksRoute
 * @inner
 * @param {string} path - Endpoint da rota ('/:id/updateTask').
 * @param {callback} middleware - Função de controle definida em taskController.updateTask.
 */
router.put('/:id/updateTask', taskController.updateTask);

/**
 * Rota DELETE para excluir uma tarefa pelo ID.
 * @name DELETE /tasks/:id/deleteTask
 * @function
 * @memberof module:routes/TasksRoute
 * @inner
 * @param {string} path - Endpoint da rota ('/:id/deleteTask').
 * @param {callback} middleware - Função de controle definida em taskController.deleteTask.
 */
router.delete('/:id/deleteTask', taskController.deleteTask);

/**
 * Rota GET para buscar todas as tarefas.
 * @name GET /tasks/getTasks
 * @function
 * @memberof module:routes/TasksRoute
 * @inner
 * @param {string} path - Endpoint da rota ('/getTasks').
 * @param {callback} middleware - Função de controle definida em taskController.getTasks.
 */
router.get('/getTasks', taskController.getTasks);

/**
 * Rota PATCH para marcar uma tarefa como concluída pelo ID.
 * @name PATCH /tasks/:id/completeTask
 * @function
 * @memberof module:routes/TasksRoute
 * @inner
 * @param {string} path - Endpoint da rota ('/:id/completeTask').
 * @param {callback} middleware - Função de controle definida em taskController.completeTask.
 */
router.patch('/:id/completeTask', taskController.completeTask);

module.exports = router;
