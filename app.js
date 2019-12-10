const express = require('express');
const bodyParser = require('body-parser');

const {
  PORT = 3000,
} = process.env;

const app = express();

app.use(bodyParser.urlencoded());
app.set('view engine', 'ejs');

const startRouter = require('./routes/start');
const signUpRouter = require('./routes/signUp');
const signInRouter = require('./routes/signIn');
const homeRouter = require('./routes/home');
const logoutRouter = require('./routes/logout');

app.use('/', startRouter);
app.use('/sign-up', signUpRouter);
app.use('/sign-in', signInRouter);
app.use('/home', homeRouter);
app.use('/logout', logoutRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${PORT}... Press Ctrl+C to stop it...`);
});
