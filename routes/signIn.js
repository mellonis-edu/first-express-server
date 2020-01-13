const express = require('express');
const userList = require('../store/userList');
const consts = require('../consts');
const sessionStore = require('../store/session');

const router = express.Router();

router.get('/', (req, res) => {
  if (req.userId) {
    return res.redirect('/home');
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.render('signIn', {
    email: '',
    password: '',
    errorMessage: '',
  });
});

router.post('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  const {
    email,
    password,
  } = req.body;

  const user = userList.find((localUser) => (
    localUser.email === email && localUser.password === password
  ));

  if (user) {
    const sessionId = sessionStore.makeSession({
      userId: user.id,
    });

    res.cookie(consts.sessionIdCookieName, sessionId, {
      maxAge: 30 * 60 * 1000,
    });
    res.redirect('/home');
  } else {
    res.render('signIn', {
      email,
      password,
      errorMessage: 'User not found',
    });
  }
});

module.exports = router;
