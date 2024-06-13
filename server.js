const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const promBundle = require("express-prom-bundle");
const taskRoutes = require("./routes/TasksRoute");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Middleware para parsing de JSON.
 * Permite que o servidor Express parseie corpos de requisição no formato JSON.
 */
app.use(bodyParser.json());

/**
 * Middleware de logging com Morgan.
 * Gera logs no console para cada requisição HTTP recebida pelo servidor.
 */
app.use(morgan("dev"));

/**
 * Middleware para métricas com express-prom-bundle.
 * Coleta métricas HTTP como contagem de requisições e duração das mesmas.
 */
const metricsMiddleware = promBundle({ includeMethod: true });
app.use(metricsMiddleware);

/**
 * Conexão com o MongoDB.
 * Estabelece a conexão com o banco de dados MongoDB usando Mongoose.
 */
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

/**
 * Rotas para manipulação de tarefas.
 * Define o prefixo "/tasks" para todas as rotas definidas no arquivo TasksRoute.
 */
app.use("/tasks", taskRoutes);

/**
 * Inicialização do servidor.
 * O servidor Express começa a ouvir as requisições na porta especificada.
 */
app.listen(PORT, () => {
  console.log(`Servidor está rodando em http://localhost:${PORT}`);
});

// Exporta o aplicativo Express para uso em outros módulos.
module.exports = app;
