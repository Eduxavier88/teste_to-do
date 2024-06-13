# Gerenciamento de Tarefas

Este projeto é um sistema simples de gerenciamento de tarefas com integração ao MongoDB e Google Calendar.

## Configurações

Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:

Node.js
MongoDB (local ou acesso a um serviço online)
Conta de desenvolvedor no Google para acesso ao Google Calendar API

## Instalação

1. Clone o repositório:



```
git clone https://github.com/Eduxavier88/teste_to-do.git
cd nome-do-repositorio

```
2. Instale as dependencias:
```
npm install


```
3. configure as variaveis de ambiente:
```
MONGO_URI=seu_uri_do_mongodb
GOOGLE_CLIENT_ID=seu_client_id
GOOGLE_CLIENT_SECRET=seu_client_secret
GOOGLE_REDIRECT_URI=seu_redirect_uri
GOOGLE_REFRESH_TOKEN=seu_refresh_token



```
4. Inicie o servidor:
```
npm start

```
## Uso
Endpoints da API
Criar uma nova tarefa
Método: POST

URL: http://localhost:3000/tasks/createTask

Corpo da requisição (JSON):
```
{
  "title": "Título da Tarefa",
  "description": "Descrição opcional da Tarefa."
}

```
Atualizar uma tarefa existente
Método: PUT

URL: http://localhost:3000/tasks/updateTask/:id

Corpo da requisição (JSON):
```
{
  "title": "Novo Título da Tarefa",
  "description": "Nova descrição da Tarefa."
}

```
Deletar uma tarefa existente
Método: DELETE
URL: http://localhost:3000/tasks/deleteTask/:id

Retornar todas as tarefas
Método: GET
URL: http://localhost:3000/tasks/getTasks

Marcar uma tarefa como concluída
Método: PATCH
URL: http://localhost:3000/tasks/completeTask/:id

## Exemplos no Postman
Criar uma nova tarefa
Método: POST

URL: http://localhost:3000/tasks/createTask

Corpo da Requisição (selecione JSON):
```
{
  "title": "Estudar para o exame de história",
  "description": "Revisar os capítulos 1 a 5 do livro."
}


```
Atualizar uma tarefa existente
Método: PUT

URL: http://localhost:3000/tasks/updateTask/60c72b2f9b1d8b001c8e4c7b (substitua pelo ID real da tarefa)

Corpo da Requisição (selecione JSON):
```
{
  "title": "Novo título da tarefa",
  "description": "Nova descrição da tarefa."
}

```
Deletar uma tarefa existente
Método: DELETE
URL: http://localhost:3000/tasks/deleteTask/60c72b2f9b1d8b001c8e4c7b (substitua pelo ID real da tarefa)

Retornar todas as tarefas
Método: GET
URL: http://localhost:3000/tasks/getTasks

Marcar uma tarefa como concluída
Método: PATCH
URL: http://localhost:3000/tasks/completeTask/60c72b2f9b1d8b001c8e4c7b (substitua pelo ID real da tarefa)


## Estrutura do Projeto

```
├── controllers
│   └── TaskController.js
├── models
│   └── TaskModel.js
├── routes
│   └── TasksRoute.js
├── services
│   └── googleCalendar.js
├── .env
├── .gitignore
├── package.json
└── server.js


```
## Configuração e monitoramento:
Este projeto utiliza métricas HTTP para monitorar o desempenho da API. As métricas são coletadas automaticamente usando o express-prom-bundle e podem ser acessadas através da rota /metrics do servidor.

## Métricas Disponíveis
http_request_duration_seconds: Histograma da duração das requisições HTTP, etiquetado com status_code e method.

## Como Acessar as Métricas
 Para visualizar as métricas:

Inicie o Servidor: Certifique-se de que o servidor está em execução. Você pode iniciar o servidor com o comando:
```
npm start
```
Acesse as Métricas: Abra um navegador web e vá para a seguinte URL:
```
http://localhost:3000/metrics
```
Isso irá exibir um documento com as métricas coletadas.

## Configuração Adicional
Middleware de Métricas: O middleware express-prom-bundle está configurado para coletar automaticamente as métricas HTTP. Você pode ajustar as configurações do bundle conforme necessário para incluir mais métricas ou personalizar o comportamento de coleta.

Logging: As requisições HTTP são registradas no console usando o middleware morgan, facilitando a visualização e depuração durante o desenvolvimento.

Conexão com MongoDB: O projeto se conecta ao MongoDB usando Mongoose. Certifique-se de configurar corretamente a variável de ambiente MONGO_URI no arquivo .env para estabelecer a conexão com o banco de dados.

Para configurações avançadas de monitoramento ou para mais informações sobre como personalizar as métricas coletadas, consulte a documentação oficial do express-prom-bundle.


## Contribuição
Contribuições são bem-vindas! Para reportar bugs, sugestões de melhorias ou para contribuir com código, por favor abra uma issue ou envie um pull request.
## License

[MIT](https://choosealicense.com/licenses/mit/)