const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.render('signUp', {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    errorMessage: '',
  });
});

router.post('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.statusCode = 501;
  res.end('Not implemented yet!..');
});

module.exports = router;
