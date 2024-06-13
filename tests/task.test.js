const request = require("supertest");
const app = require("../server"); // Supondo que seu servidor esteja exportado de "../server.js" ou similar
const mongoose = require("mongoose");
const Task = require("../models/TaskModel");

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

test("should create a task", async () => {
  const response = await request(app).post("/tasks/createTask").send({
    title: "Test Task",
    description: "Test Description",
  });
  expect(response.statusCode).toBe(201);
  expect(response.body.title).toBe("Test Task");
});

test("should update a task", async () => {
  const task = new Task({
    title: "Initial Task",
    description: "Initial Description",
  });
  await task.save();
  const response = await request(app)
    .put(`/tasks/${task._id}/updateTask`)
    .send({
      title: "Updated Task",
    });
  expect(response.statusCode).toBe(200);
  expect(response.body.title).toBe("Updated Task");
});

test("should delete a task", async () => {
  const task = new Task({ title: "Task to Delete" });
  await task.save();
  const response = await request(app).delete(`/tasks/${task._id}/deleteTask`);
  expect(response.statusCode).toBe(204);
});

test("should get all tasks", async () => {
  const task1 = new Task({ title: "Task 1" });
  const task2 = new Task({ title: "Task 2" });
  await task1.save();
  await task2.save();
  const response = await request(app).get("/tasks/getTasks");
  expect(response.statusCode).toBe(200);
  expect(response.body.length).toBe(2);
});

test("should complete a task", async () => {
  const task = new Task({ title: "Incomplete Task" });
  await task.save();
  const response = await request(app).patch(`/tasks/${task._id}/completeTask`);
  expect(response.statusCode).toBe(200);
  expect(response.body.completed).toBe(true);
});
