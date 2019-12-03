const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`
    <h1>Sign Up Form</h1>
    <form method="POST" action="/sign-up" autocomplete="off">
      <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" required autocomplete="off">
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required autocomplete="off">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" required autocomplete="off">
      </div>
      <div>
        <label for="password_confirmation">Password again</label>
        <input type="password" name="password_confirmation" id="password_confirmation" required autocomplete="off">
      </div>
      <button>Sign Up</button>
    </form>
    <a href="/sign-in">Sign In</a>
  `);
});

router.post('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.statusCode = 501;
  res.end('Not implemented yet!..');
});

module.exports = router;
