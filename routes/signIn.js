const express = require('express');
const userList = require('../store/userList');

const router = express.Router();

router.get('/', (req, res) => {
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
