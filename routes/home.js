const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`
    <h1>Hello, user!</h1>
    <form method="POST" action="/logout">
      <button>Log out</button>
    </form>
  `);
});

module.exports = router;
