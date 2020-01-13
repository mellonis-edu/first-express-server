const express = require('express');
const sessionStore = require('../store/session');
const consts = require('../consts');

const router = express.Router();

router.post('/', (req, res) => {
  if (req.userId) {
    sessionStore.destroySession(req.cookies[consts.sessionIdCookieName]);
  }

  res.redirect('/');
});

module.exports = router;
