const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`
    <h1>Sign In Form</h1>
    <form method="POST" action="/sign-in" autocomplete="off">
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required autocomplete="off">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" required autocomplete="off">
      </div>
      <button>Sign Ip</button>
    </form>
    <a href="/sign-up">Sign Up</a>
  `);
});

router.post('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.statusCode = 501;
  res.end('Not implemented yet!..');
});

module.exports = router;
