const express = require('express');

const {
  PORT = 3000,
} = process.env;

const app = express();

const startRouter = require('./routs/start');
const signUpRouter = require('./routs/signUp');
const signInRouter = require('./routs/signIn');
const homeRouter = require('./routs/home');
const logoutRouter = require('./routs/logout');

app.use('/', startRouter);
app.use('/sign-up', signUpRouter);
app.use('/sign-in', signInRouter);
app.use('/home', homeRouter);
app.use('/logout', logoutRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}... Press Ctrl+C to stop it...`);
});
