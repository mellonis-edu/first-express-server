const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`
    <h1>Welcome</h1>
    <ul>
      <li>
        <a href="/sign-in">Sign In</a>
      </li>
      <li>
        <a href="/sign-up">Sign Up</a>
      </li>
    </ul>
  `);
});

module.exports = router;
