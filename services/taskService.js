const { google } = require("googleapis");
const { OAuth2 } = google.auth;
require("dotenv").config();

/**
 * Cliente OAuth2 para autenticação com o Google Calendar API.
 * @type {OAuth2}
 */
const oAuth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URL
);

// Configura as credenciais usando o refresh token
oAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

/**
 * Instância do cliente do Google Calendar API.
 * @type {google.calendar}
 */
const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

/**
 * Adiciona um evento ao calendário do Google.
 * @async
 * @function addEventToCalendar
 * @param {Object} task - Objeto contendo informações da tarefa a ser adicionada ao calendário.
 * @param {string} task.title - Título do evento.
 * @param {string} [task.description] - Descrição opcional do evento.
 * @param {Date} task.createdAt - Data e hora de criação da tarefa.
 * @returns {Promise<void>} Promise vazia que não retorna nenhum valor explicitamente.
 * @throws {Error} Lança um erro se houver algum problema ao criar o evento no Google Calendar.
 */
const addEventToCalendar = async (task) => {
  const event = {
    summary: task.title,
    description: task.description,
    start: {
      dateTime: new Date(task.createdAt).toISOString(),
      timeZone: "America/Sao_Paulo",
    },
    end: {
      dateTime: new Date(task.createdAt).toISOString(),
      timeZone: "America/Sao_Paulo",
    },
  };

  try {
    await calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });
    console.log("Event created successfully!");
  } catch (error) {
    console.error("Error creating event: ", error);
    throw new Error("Failed to create event in Google Calendar");
  }
};

module.exports = { addEventToCalendar };
