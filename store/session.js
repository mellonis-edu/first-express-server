const uniqueString = require('unique-string');

const sessions = {};

function destroySession(id) {
  delete sessions[id];
}

function getSession(id) {
  return sessions[id];
}

function isSessionExists(id) {
  return Object.prototype.hasOwnProperty.call(sessions, id);
}

function makeSession(data = {}) {
  const id = uniqueString();

  sessions[id] = data;

  return id;
}

module.exports = {
  destroySession,
  getSession,
  isSessionExists,
  makeSession,
};
