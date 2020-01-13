const sessionStore = require('../store/session');
const consts = require('../consts');

function middleware(req, res, next) {
  if (Object.prototype.hasOwnProperty.call(req.cookies, consts.sessionIdCookieName)) {
    const sessionId = req.cookies[consts.sessionIdCookieName];

    if (sessionStore.isSessionExists(sessionId)) {
      const session = sessionStore.getSession(sessionId);

      req.userId = session.userId;

      return next();
    }
  }

  return next();
}

module.exports = middleware;
