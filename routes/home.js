const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  if (!req.userId) {
    return res.redirect('/sign-in');
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.render('home', {});
});

module.exports = router;
