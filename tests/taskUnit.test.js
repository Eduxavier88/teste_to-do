const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../server'); // Importe o arquivo principal da sua aplicação
const Task = require('../models/TaskModel'); // Importe seu modelo de Task
const { createTask, updateTask, deleteTask, getAllTasks, completeTask } = require('../services/taskService'); // Importe suas funções de serviço

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  await Task.deleteMany({});
});

// Testes unitários para operações CRUD de tarefas

test('createTask should create a new task', async () => {
  const createdTask = await createTask({
    title: 'Test Task',
    description: 'Test Description',
  });

  expect(createdTask.title).toBe('Test Task');
  expect(createdTask.description).toBe('Test Description');
});

test('updateTask should update an existing task', async () => {
  const initialTask = await Task.create({
    title: 'Initial Task',
    description: 'Initial Description',
  });

  const updatedTask = await updateTask(initialTask._id, {
    title: 'Updated Task',
  });

  expect(updatedTask.title).toBe('Updated Task');
});

test('deleteTask should delete an existing task', async () => {
  const taskToDelete = await Task.create({
    title: 'Task to Delete',
  });

  await deleteTask(taskToDelete._id);

  const deletedTask = await Task.findById(taskToDelete._id);
  expect(deletedTask).toBeNull();
});

test('getAllTasks should return all tasks', async () => {
  await Task.create({ title: 'Task 1' });
  await Task.create({ title: 'Task 2' });

  const tasks = await getAllTasks();
  expect(tasks.length).toBe(2);
});

test('completeTask should mark a task as completed', async () => {
  const taskToComplete = await Task.create({
    title: 'Incomplete Task',
  });

  const completedTask = await completeTask(taskToComplete._id);
  expect(completedTask.completed).toBe(true);
});
