# Gerenciamento de Tarefas

Este projeto é um sistema simples de gerenciamento de tarefas com integração ao MongoDB e Google Calendar.

## Configuração

### Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js
- MongoDB (local ou acesso a um serviço online)
- Conta de desenvolvedor no Google para acesso ao Google Calendar API

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Eduxavier88/teste_to-do.git
   cd nome-do-repositorio

2. Instale as dependencias:
  
   npm install

3. Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:
MONGO_URI=seu_uri_do_mongodb
GOOGLE_CLIENT_ID=seu_client_id
GOOGLE_CLIENT_SECRET=seu_client_secret
GOOGLE_REDIRECT_URI=seu_redirect_uri
GOOGLE_REFRESH_TOKEN=seu_refresh_token

4. Inicie o servidor:

npm start

Uso
Endpoints da API
Criar uma nova tarefa

Método: POST
URL: http://localhost:3000/tasks/createTask
Corpo da requisição (JSON):

{
  "title": "Título da Tarefa",
  "description": "Descrição opcional da Tarefa."
}

Atualizar uma tarefa existente

Método: PUT
URL: http://localhost:3000/tasks/updateTask/:id
Corpo da requisição (JSON):

{
  "title": "Novo Título da Tarefa",
  "description": "Nova descrição da Tarefa."
}

Deletar uma tarefa existente

Método: DELETE
URL: http://localhost:3000/tasks/deleteTask/:id
Retornar todas as tarefas

Método: GET
URL: http://localhost:3000/tasks/getTasks
Marcar uma tarefa como concluída

Método: PATCH
URL: http://localhost:3000/tasks/completeTask/:id

Exemplos no Postman
Criar uma nova tarefa
Método: POST
URL: http://localhost:3000/tasks/createTask
Corpo da Requisição (selecione JSON)

{
  "title": "Estudar para o exame de história",
  "description": "Revisar os capítulos 1 a 5 do livro."
}
Atualizar uma tarefa existente
Método: PUT
URL: http://localhost:3000/tasks/updateTask/60c72b2f9b1d8b001c8e4c7b (substitua pelo ID real da tarefa)
Corpo da Requisição (selecione JSON)

   {
  "title": "Novo título da tarefa",
  "description": "Nova descrição da tarefa."
}

Deletar uma tarefa existente
Método: DELETE
URL: http://localhost:3000/tasks/deleteTask/60c72b2f9b1d8b001c8e4c7b (substitua pelo ID real da tarefa)
Retornar todas as tarefas
Método: GET
URL: http://localhost:3000/tasks/getTasks
Marcar uma tarefa como concluída
Método: PATCH
URL: http://localhost:3000/tasks/completeTask/60c72b2f9b1d8b001c8e4c7b (substitua pelo ID real da tarefa)

Estrutura do Projeto

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
Contribuição
Contribuições são bem-vindas! Para reportar bugs, sugestões de melhorias ou para contribuir com código, por favor abra uma issue ou envie um pull request.

Licença
Este projeto está licenciado sob a Licença MIT.

### Explicação das Seções

- **Configuração**: Detalha os pré-requisitos e fornece instruções passo a passo para instalar as dependências e configurar as variáveis de ambiente.
- **Instalação**: Descreve como clonar o repositório, instalar dependências e configurar o ambiente.
- **Uso**: Lista todos os endpoints da API com exemplos detalhados de como usar cada um.
- **Exemplos no Postman**: Fornece exemplos práticos de como testar a API usando o Postman.
- **Estrutura do Projeto**: Dá uma visão geral da estrutura do diretório do projeto.
- **Contribuição**: Convida os usuários a contribuírem para o projeto.
- **Licença**: Informa sobre a licença do projeto.

Este `README.md` deve fornecer todas as informações necessárias para que qualquer pessoa possa configurar, usar e contribuir para o seu projeto.
