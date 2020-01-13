const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.render('start', {});
  console.log(req.cookies);
});

module.exports = router;
